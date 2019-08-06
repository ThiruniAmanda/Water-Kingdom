const mongodb=require('./src/scripts/mongodb_setup.js')
const express=require('express');
const app=express();
const ExpressValidator = require('express-validator');
const bodyparser=require('body-parser');
const multer=require('multer');
var urlencodedParser = bodyparser.urlencoded({ extended: false });
const session = require('express-session');
const path=require('path');


const storage=multer.diskStorage({destination:function(req,res,cb){
    cb(null,'./src/assets/storage/items')
  },
  filename:function(req,file,cb){
     cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
     console.log(req.files);
  }
});

const storage_admin=multer.diskStorage({destination:function(req,res,cb){
  cb(null,'./src/assets/storage/admin')
},
filename:function(req,file,cb){
   cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
   console.log(req.files);
}
});

const upload_admin=multer({storage:storage_admin});

const upload=multer({storage:storage});
// const file_uploads=upload.fields([{name:'imgInp',maxCount:1},{name:'videoInp',maxCount:1}])
app.use(bodyparser.json());
// app.use(ExpressValidator());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));
app.use(express.static('src'));

app.get('/',function(req,res){
    res.send('Hello');
});


//upload fish details
app.post('/fish_det',upload.any(),urlencodedParser,function(req,res,next){
 var name=req.body.name;
 var category=req.body.category;
 var size=req.body.size;
 var des=req.body.description;
 var age=req.body.age;
 var gender=req.body.gender;
 const img_file = req.files['imgInp'];
 const video_file=req.files['videoInp'];
//   var img_path_file="../../../assets/storage/"+img_file.filename;
//  var video_path_file="../../../assets/storage/"+video_file.filename;
 console.log(req.files);
 mongodb.mongo.connect(mongodb.url,function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,img_path:img_path_file,video_path:video_path_file};
    dbo.collection("fish_details").insert(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
    db.close();
})
 res.redirect('/add-fish-details')
});



//upload items
app.post('/item_det',upload.single('item_imgInp'),urlencodedParser,function(req,res,next){

  var item_name=req.body.item_name;
  var quantity=req.body.quantity;
  var description=req.body.item_description;
  var price=req.body.price;
  var code=req.body.code;
  var file=req.file;
  var img_path="../../../assets/storage/items/"+file.filename;
  mongodb.mongo.connect(mongodb.url,function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { item_name:item_name,quantity:quantity,description:description,price:price,code:code,path:img_path};
    dbo.collection("item_details").insert(myobj, function(err, res) {
      if (err) throw err;
      console.log("Document inserted");
    });
    db.close();
});

 res.redirect('/add-item-details')

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
  var img_path="../../../assets/storage/admin/"+file.filename;
  console.log(img_path)
  var data_obj={user_name:user_name,email:email,first_name:f_name,last_name:l_name,address:address,city:city,country:country,about:about,image_path:img_path};
  mongodb.mongo.connect(mongodb.url,function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    dbo.collection("item_details").insert(data_obj, function(err, res) {
      if (err) throw err;
      console.log("Document inserted");
    });
    db.close();
});
 res.redirect('/user')
})

console.log('Listening to 4600');


app.listen(4600);


 
 
 