const mongodb=require('./src/scripts/mongodb_setup.js')
// require('./src/scripts/get_item_data')
const express=require('express');
const app=express();
const ExpressValidator = require('express-validator');
const bodyparser=require('body-parser');
const multer=require('multer');
const cors = require('cors');
var urlencodedParser = bodyparser.urlencoded({ extended: false });
const session = require('express-session');
const path=require('path');
const bcrypt = require('bcrypt');
const file_system=require('fs');
const saltRounds = 10;
const server = require('http').Server(app);
const io=require('socket.io')(server);
var error=false;
var router = express.Router()
require('events').EventEmitter.prototype._maxListeners = 100;
const maxSize=50;

const storage=multer.diskStorage({destination:function(req,file,cb){
    if(file.mimetype=="image/png")
    cb(null,'./src/assets/storage/fish/images')
    else
    cb(null,'./src/assets/storage/fish/videos')
   
  },
  filename:function(req,file,cb){
     cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    //  console.log(req.files);
  }
});

const storage_admin=multer.diskStorage({destination:function(req,res,cb){
  cb(null,'./src/assets/storage/admin')
},
filename:function(req,file,cb){
   cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
   console.log("REQ"+req.files);
}
});

const upload_admin=multer({storage:storage_admin});
const upload=multer({storage:storage});
// const file_uploads=upload.fields([{name:'imgInp',maxCount:1},{name:'videoInp',maxCount:1}])
app.use(bodyparser.json());
// app.use(ExpressValidator());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));

// app.use(function(req,res,next){
//   //res.header('Access-Control-Allow-Origin', 'GET');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// })
app.use(express.static('src'));
app.set('views', path.join(__dirname, '/src/app/pages/user'));
app.engine('html',require('ejs').renderFile);
app.use(cors())

app.get('/home',function(req,res){
    console.log('hello')
    res.send('Hello');
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//upload fish details
app.post('/fish_det',upload.any(),urlencodedParser,function(req,res,next){
  if((req.files[0].size>maxSize*1024*1024) || (req.files[1].size>maxSize*1024*1024)){
    res.send('Error 413->File is too large. Maximum size:40MB')
  }
  else{
 var name=req.body.name;
 var category=req.body.category;
 var size=req.body.size;
 var des=req.body.description;
 var age=req.body.age;
 var gender=req.body.gender;
 var price=req.body.price;
 var code=req.body.code;
 var link=req.body.link;
 console.log(req.files[0])
 var image_path="assets/storage/fish/images/"+req.files[0].filename;
 var video_path="assets/storage/fish/videos/"+req.files[1].filename;
 mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:image_path,video_path:video_path,link:link};
    dbo.collection("fish_details").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
    db.close();
})
 res.redirect('/add-fish-details')
}
});

//update-fish-details
app.post('/update_fish_details',upload.any(),urlencodedParser,function(req,res,next){
  console.log('hello ')
  console.log(req.files[0].path)
  if((req.files[0].size>maxSize*1024*1024) || (req.files[1].size>maxSize*1024*1024)){
    res.send('Error 413->File is too large. Maximum size:40MB')
  }
  else{
 var name=req.body.name;
 var category=req.body.category;
 var size=req.body.size;
 var des=req.body.description;
 var age=req.body.age;
 var gender=req.body.gender;
 var price=req.body.price;
 var code=req.body.code;
 var link=req.body.link;
 console.log(req.files[0])
 var image_path="assets/storage/fish/images/"+req.files[0].filename;
 var video_path="assets/storage/fish/videos/"+req.files[1].filename;
 mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:image_path,video_path:video_path,link:link};
    dbo.collection("fish_details").updateOne({code:code},{$set:myobj}, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
    db.close();
})
 res.redirect('/data')
}
});


//upload user profile picture and data
app.post('/user_info',upload_admin.single('profile_img'),urlencodedParser,function(req,res,next){
  var user_name=req.body.user_name;
  var email=req.body.email;
  var f_name=req.body.first_name;
  var l_name=req.body.last_name;
  var address=req.body.address;
  var city=req.body.city;
  var country=req.body.country;
  var about=req.body.about_me;
  var file=req.file;
  var img_path="assets/storage/admin/"+file.filename;
  console.log(img_path)
  var data_obj={user_name:user_name,email:email,first_name:f_name,last_name:l_name,address:address,city:city,country:country,about:about,image_path:img_path,file_name:file.filename};
 
  mongodb.mongo.connect(mongodb.url,function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    dbo.collection("user_details").update({'user_name':'Nilaksha Deemantha'},data_obj, function(err, res) {
      if (err) throw err;
      console.log("Document updated");
    });
    db.close();
});

 res.redirect('/user')
});


app.get('/fetch_details',urlencodedParser,function(req,res){

  var findDocuments = function(db, callback) {
    var collection = db.collection('fish_details');
    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    // assert.equal(null, err);
    console.log("Connected correctly to server");
    var dbo = db.db("aquakingdom");
    findDocuments(dbo, function(docs) {
      console.log(docs);
      res.json(docs);
      db.close();
    });
   

  });
 
});


app.get('/delete_data/:id',urlencodedParser,function(req,res){
  console.log(req.params)

  var removeproducts = function(db, callback) {
    db.collection('item_details').deleteOne({code:req.params.id},
       function(err, results) {
          console.log('product deleted');
          if(err) throw err;
          callback(results);
       }
    );
 };

 var findDocuments = function(db, callback) {
  var collection = db.collection('item_details');
  collection.find({code:req.params.id}).toArray(function(err, docs) {
    if(err) throw err;
    // assert.equal(err, null);
    callback(docs);
  });
};

mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true }, function(err, db){
  //  assert.equal(null, err);
  if(err) throw err;
  var dbo = db.db("aquakingdom");
  
 findDocuments(dbo, function(docs) {
  console.log(docs[0].path);
  var path_to_delete="./src/assets/storage/items/"+docs[0].file_name
    file_system.unlink(path_to_delete,(err)=>{
      if(err) throw err
    })
  
 
 });

 removeproducts(dbo, function(results) {
   console.log('jioo')
  res.json(results)

 });   

 db.close();
    
});
});



app.get('/load_profile',urlencodedParser,function(req,res){

  var findDocuments = function(db, callback) {
    var collection = db.collection('user_details');
    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    // assert.equal(null, err);
    console.log("Connected correctly to server");
    var dbo = db.db("aquakingdom");
    findDocuments(dbo, function(docs) {
      console.log(docs[0]);
      res.json(docs);
      db.close();
    });
  });
});


app.get('/search_data/:id',urlencodedParser,function(req,res){
  var id=req.params.id;

  var findDocuments = function(db, callback) {
    var collection = db.collection('fish_details');
    collection.find({code:id}).toArray(function(err, docs) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    // assert.equal(null, err);
    console.log("Connected correctly to server");
    var dbo = db.db("aquakingdom");
    findDocuments(dbo, function(docs) {
      console.log('searched data /n');
      console.log(docs);
      res.json(docs);
      db.close();
    });
   

  });

});


app.get('/to_update_data/:code',urlencodedParser,function(req,res){
  var code=req.params.code;

  var findDocuments = function(db, callback) {
    var collection = db.collection('fish_details');
    collection.find({code:code}).toArray(function(err, docs) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    // assert.equal(null, err);
    console.log("Connected correctly to server");
    var dbo = db.db("aquakingdom");
    findDocuments(dbo, function(docs) {
      console.log('searched data /n');
      console.log(docs);
      res.json(docs);
      db.close();
    });
   

  });

});


app.get('/visibility_change_false/:field',urlencodedParser,function(req,res){
  
  mongodb.mongo.connect(mongodb.url,{useNewUrlParser:true},function(err,db){
    var field=req.params.field;
    var update_key={}
    update_key[field]=true;
    var updated={}
    updated[field]=false
    console.log(field)
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    dbo.collection("visible_of_fields").updateOne(update_key,{$set:updated}, function(err, res) {
      if (err) throw err;
      console.log("Document updated");
      // res.json({message:'Success'})
    });
    db.close();
});
});

app.get('/visibility_change_true/:field',urlencodedParser,function(req,res){
  mongodb.mongo.connect(mongodb.url,{useNewUrlParser:true},function(err,db){
    var field=req.params.field;
    var update_key={}
    update_key[field]=true;
    var updated={}
    updated[field]=false
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    dbo.collection("visible_of_fields").updateOne(update_key,updated,function(err, res) {
      if (err) throw err;
      console.log("Document updated");
      res.json({message:'Success'})
    });
    db.close();
});
});


app.get('/load_visibility',urlencodedParser,function(req,res){

  var findDocuments = function(db, callback) {
    var collection = db.collection('visible_of_fields');
    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    var dbo = db.db("aquakingdom");
    findDocuments(dbo, function(docs) {
      console.log(docs);
      res.json(docs);
      db.close();
    });
  });
});


app.post('/password_reset',urlencodedParser,function(req,res){
  console.log("received")
  var password=req.body.new_password;
  var old_password=req.body.old_password;
  mongodb.mongo.connect(mongodb.url,function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var old_pass=dbo.collection("user_details").find({},{"user_name":'Nilaksha Deemantha'});
    old_pass.forEach(function(doc,err){
      console.log(doc);
      var password_admin=doc.password;
      bcrypt.compare(old_password,password_admin, function(err,res1) {
        console.log(res1)

        if(res1){
          bcrypt.hash(password, saltRounds, function(err, hash) {
              if (err) throw err;
              var dbo = db.db("aquakingdom");
              dbo.collection("user_details").update({"user_name":"Nilaksha Deemantha"},{$set:{'password':hash}},function(err, res) {
                if (err) throw err;
                console.log("Document Updated");
              });
              db.close();

          res.redirect('/user')
          });
        }

        else{
          console.log('error')
          // var io = require('socket.io')(server, { path: '/validate_admin' }).listen(server);
          // io.of('validate_admin').on('connection', socket=> {
          //   console.log('connected:', socket.client.id);
          //   socket.emit('error_validate',true);
          //   socket.emit('redirect',res.redirect('/user'))
          // }); 

          module.exports=function(router){
            console.log('hello')
            router.get('/user',function(res,req){
              res.render('user.component.html',"hello")
            })
           
          }
        }
      });
    });

    db.close();
});

 
});


console.log('Listening to 4600');


server.listen(4600);

module.exports=router

 
 
 