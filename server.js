const mongodb=require('./src/scripts/mongodb_setup.js')
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const multer=require('multer');
const cors = require('cors');
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const session = require('express-session');
const path=require('path');
const bcrypt = require('bcrypt');
const file_system=require('fs');
const saltRounds = 10;
const server = require('http').Server(app);
require('events').EventEmitter.prototype._maxListeners = 100;
const maxSize=50;

const storage=multer.diskStorage({destination:function(req,file,cb){
    if(file.mimetype=="image/png")
    cb(null,'./src/storage/fish/images')
    else
    cb(null,'./src/storage/fish/videos')
   
  },
  filename:function(req,file,cb){
     cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    //  console.log(req.files);
  }
});

const storage_admin=multer.diskStorage({destination:function(req,res,cb){
  cb(null,'./src/storage/admin')
},
filename:function(req,file,cb){
   cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
   console.log("REQ"+req.files);
}
});

const upload_admin=multer({storage:storage_admin});
const upload=multer({storage:storage});
app.use(bodyparser.json());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));
app.use(express.static('src'));
app.set('views', path.join(__dirname, '/src/app/pages/user'));
app.engine('html',require('ejs').renderFile);
app.use(cors())





//upload fish details
app.post('/fish_det',upload.any(),urlencodedParser,function(req,res,next){

if(req.files[0]==null && req.files[1]==null){
 
    var name=req.body.name;
    var category=req.body.category;
    var size=req.body.size;
    var des=req.body.description;
    var age=req.body.age;
    var gender=req.body.gender;
    var price=req.body.price;
    var code=req.body.code;
    var link=req.body.link;
    
    var findDocuments = function(db, callback) {
     var collection = db.collection('space_usage');
     collection.find().toArray(function(err, docs) {
       if(err) throw err;
       callback(docs);
     });
   }
   
    mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
       if (err) throw err;
       var dbo = db.db("aquakingdom");
       var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:null,video_path:null,link:link,img_file:null,video_file:null,img_originalname:null,video_originalname:null,img_size:null,video_size:null};
       dbo.collection("fish_details").insertOne(myobj, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
       });
       
       var size_used=0;
       findDocuments(dbo, function(docs) {
         console.log(docs);
         size_used+=docs[0].space;
         console.log('size_used'+size_used)
       
         dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used}}, function(err, res) {
           if (err) throw err;
           console.log("size updated");
           db.close();
         });
       });
     });
      res.redirect('/add-fish-details');
     }
   

 else if(req.files[0]==null){
 var name=req.body.name;
 var category=req.body.category;
 var size=req.body.size;
 var des=req.body.description;
 var age=req.body.age;
 var gender=req.body.gender;
 var price=req.body.price;
 var code=req.body.code;
 var link=req.body.link;
 var video_path="storage/fish/videos/"+req.files[1].filename;
 var findDocuments = function(db, callback) {
  var collection = db.collection('space_usage');
  collection.find().toArray(function(err, docs) {
    if(err) throw err;
    callback(docs);
  });
}

 mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:null,video_path:video_path,link:link,img_file:null,video_file:req.files[1].filename,img_originalname:null,video_originalname:req.files[1].originalname,img_size:null,video_size:req.files[1].size};
    dbo.collection("fish_details").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
    
    var size_used=req.files[1].size
    findDocuments(dbo, function(docs) {
      console.log(docs);
      size_used+=docs[0].space;
      console.log('size_used'+size_used)
    
      dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used}}, function(err, res) {
        if (err) throw err;
        console.log("size updated");
        db.close();
      });
    });
  });
   res.redirect('/add-fish-details');
  }

  else if(req.files[1]==null){
    var name=req.body.name;
    var category=req.body.category;
    var size=req.body.size;
    var des=req.body.description;
    var age=req.body.age;
    var gender=req.body.gender;
    var price=req.body.price;
    var code=req.body.code;
    var link=req.body.link;
    var image_path="storage/fish/images/"+req.files[0].filename;
    var findDocuments = function(db, callback) {
     var collection = db.collection('space_usage');
     collection.find().toArray(function(err, docs) {
       if(err) throw err;
       callback(docs);
     });
   }
   
    mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
       if (err) throw err;
       var dbo = db.db("aquakingdom");
       var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:image_path,video_path:video_path,link:link,img_file:req.files[0].filename,video_file:null,img_originalname:req.files[0].originalname,video_originalname:null,img_size:req.files[0].size,video_size:null};
       dbo.collection("fish_details").insertOne(myobj, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
       });
       
       var size_used=req.files[0].size
       findDocuments(dbo, function(docs) {
         console.log(docs);
         size_used+=docs[0].space;
         console.log('size_used'+size_used)
       
         dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used}}, function(err, res) {
           if (err) throw err;
           console.log("size updated");
           db.close();
         });
       });
   });
   res.redirect('/add-fish-details');
  }

  else if((req.files[0].size>maxSize*1024*1024) || (req.files[1].size>maxSize*1024*1024)){
    res.send('Error 413->File is too large. Maximum size:40MB')
  }
  
else{
console.log(req.files[0].filename)
 var name=req.body.name;
 var category=req.body.category;
 var size=req.body.size;
 var des=req.body.description;
 var age=req.body.age;
 var gender=req.body.gender;
 var price=req.body.price;
 var code=req.body.code;
 var link=req.body.link;
 var image_path="storage/fish/images/"+req.files[0].filename;
 var video_path="storage/fish/videos/"+req.files[1].filename;
 
 var findDocuments = function(db, callback) {
  var collection = db.collection('space_usage');
  collection.find().toArray(function(err, docs) {
    if(err) throw err;
    callback(docs);
  });
}

 mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:image_path,video_path:video_path,link:link,img_file:req.files[0].filename,video_file:req.files[1].filename,img_originalname:req.files[0].originalname,video_originalname:req.files[1].originalname,img_size:req.files[0].size,video_size:req.files[1].size};
    dbo.collection("fish_details").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
    
    var size_used=req.files[0].size+req.files[1].size;
    console.log(size_used+' '+'size1'+req.files[0].size+' '+'size2'+req.files[1].size)
    findDocuments(dbo, function(docs) {
      console.log(docs);
      size_used+=docs[0].space;
      console.log('size_used'+size_used)
      console.log('original path'+req.files[0].originalname)

      dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used}}, function(err, res) {
        if (err) throw err;
        console.log("size updated");
        db.close();
      });
    });
});
 res.redirect('/add-fish-details');
}
});







//update-fish-details
app.post('/update_fish_details',upload.any(),urlencodedParser,function(req,res,next){

  var findDocuments = function(db, callback) {
    var collection = db.collection('fish_details');
    collection.find({code:req.params.id}).toArray(function(err, docs) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(docs);
    });
  };
  
    var findStorage = function(db, callback) {
    var collection = db.collection('space_usage');
    collection.find({name:'Nilaksha Deemantha'}).toArray(function(err, doc) {
      if(err) throw err;
      // assert.equal(err, null);
      callback(doc);
    });
  };

  if(req.files[0]==null && req.files[1]==null){
    var name=req.body.name;
    var category=req.body.category;
    var size=req.body.size;
    var des=req.body.description;
    var age=req.body.age;
    var gender=req.body.gender;
    var price=req.body.price;
    var code=req.body.code;
    var link=req.body.link;
    mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
       if (err) throw err;
       var dbo = db.db("aquakingdom");
       var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:null,video_path:null,link:link,img_file:null,video_file:null,img_originalname:null,video_originalname:null,img_size:null,video_size:null};
       dbo.collection("fish_details").updateOne({code:code},{$set:myobj}, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
       });
   
       var size_used=0;
   
         findDocuments(dbo, function(docs) {
         var path_to_delete;
         findStorage(dbo,function(doc){
           console.log(size_used)
           console.log(doc[0].space+'space')
           dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used-doc[0].space}}, function(err, res1) {
             if (err) throw err;
             console.log("size updated");
             db.close();
           });
         });
       
       if(req.files[1].originalname==docs[0].video_file){
         path_to_delete="src/storage/fish/videos/"+docs[0].video_file;
         file_system.unlink(path_to_delete,(err)=>{
           if(err) throw err
           console.log('deleted files')
         });
       }
        });
     });
     res.redirect('/data')
   }

  else if(req.files[0]==null){
   var name=req.body.name;
   var category=req.body.category;
   var size=req.body.size;
   var des=req.body.description;
   var age=req.body.age;
   var gender=req.body.gender;
   var price=req.body.price;
   var code=req.body.code;
   var link=req.body.link;
   var video_path="storage/fish/videos/"+req.files[1].filename;
   mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
      if (err) throw err;
      var dbo = db.db("aquakingdom");
      var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:null,video_path:video_path,link:link,img_file:null,video_file:req.files[1].filename,img_originalname:null,video_originalname:req.files[1].originalname,img_size:null,video_size:req.files[1].size};
      dbo.collection("fish_details").updateOne({code:code},{$set:myobj}, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
      });
  
      var size_used=(req.files[1].size);
  
        findDocuments(dbo, function(docs) {
        var path_to_delete;
        findStorage(dbo,function(doc){
          console.log(size_used)
          console.log(doc[0].space+'space')
          dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used-doc[0].space}}, function(err, res1) {
            if (err) throw err;
            console.log("size updated");
            db.close();
          });
        });
      
      if(req.files[1].originalname==docs[0].video_file){
        path_to_delete="src/storage/fish/videos/"+docs[0].video_file;
        file_system.unlink(path_to_delete,(err)=>{
          if(err) throw err
          console.log('deleted files')
        });
      }

       });
    });

    res.redirect('/data')

  }

  else if(req.files[1]==null){
    var name=req.body.name;
    var category=req.body.category;
    var size=req.body.size;
    var des=req.body.description;
    var age=req.body.age;
    var gender=req.body.gender;
    var price=req.body.price;
    var code=req.body.code;
    var link=req.body.link;
    var img_path="storage/fish/images/"+req.files[0].filename;
    mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
       if (err) throw err;
       var dbo = db.db("aquakingdom");
       var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:img_path,video_path:null,link:link,img_file:req.files[0].filename,video_file:null,img_originalname:req.files[0].originalname,video_originalname:null,img_size:req.files[0].size,video_size:req.files[1].size};
       dbo.collection("fish_details").updateOne({code:code},{$set:myobj}, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
       });
   
       var size_used=(req.files[0].size);
   
         findDocuments(dbo, function(docs) {
         var path_to_delete;
         findStorage(dbo,function(doc){
           console.log(size_used)
           console.log(doc[0].space+'space')
           dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used-doc[0].space}}, function(err, res1) {
             if (err) throw err;
             console.log("size updated");
             db.close();
           });
         });
       
       if(req.files[0].originalname==docs[0].img_file){
         path_to_delete="src/storage/fish/images/"+docs[0].img_file;
         file_system.unlink(path_to_delete,(err)=>{
           if(err) throw err
           console.log('deleted files')
         });
       }
 
        });
     });
     res.redirect('/data')
   }
 
  else if((req.files[0].size>maxSize*1024*1024) || (req.files[1].size>maxSize*1024*1024)){
    res.send('Error 413->File is too large. Maximum size:40MB')
  }

  else{
  //   var findDocuments = function(db, callback) {
  //   var collection = db.collection('fish_details');
  //   collection.find({code:req.params.id}).toArray(function(err, docs) {
  //     if(err) throw err;
  //     // assert.equal(err, null);
  //     callback(docs);
  //   });
  // };
  
  //   var findStorage = function(db, callback) {
  //   var collection = db.collection('space_usage');
  //   collection.find({name:'Nilaksha Deemantha'}).toArray(function(err, doc) {
  //     if(err) throw err;
  //     // assert.equal(err, null);
  //     callback(doc);
  //   });
  // };

 var name=req.body.name;
 var category=req.body.category;
 var size=req.body.size;
 var des=req.body.description;
 var age=req.body.age;
 var gender=req.body.gender;
 var price=req.body.price;
 var code=req.body.code;
 var link=req.body.link;
// console.log(req.files[0])
 var image_path="storage/fish/images/"+req.files[0].filename;
 var video_path="storage/fish/videos/"+req.files[1].filename;
 mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    var myobj = { name:name,category:category,size:size,description:des,age:age,gender:gender,price:price,code:code,img_path:image_path,video_path:video_path,link:link,img_file:req.files[0].filename,video_file:req.files[1].filename,img_originalname:req.files[0].originalname,video_originalname:req.files[0].originalname,img_size:req.files[0].size,video_size:req.files[1].size};
    dbo.collection("fish_details").updateOne({code:code},{$set:myobj}, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });

    var size_used=(req.files[0].size+req.files[1].size);

      findDocuments(dbo, function(docs) {
      var path_to_delete;
      var size_updated=docs[0].img_size+docs[0].video_size;
    
      findStorage(dbo,function(doc){
        console.log(size_used)
        console.log(doc[0].space+'space')
        console.log('original name'+req.files[0].originalname)
        dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used-doc[0].space}}, function(err, res1) {
          if (err) throw err;
          console.log("size updated");
          db.close();
        });
      });
    
    if(req.files[0].originalname==docs[0].img_file && req.files[1].originalname==docs[0].video_file ){
      for(var i=0;i<2;i++){
        if(i==0)
          path_to_delete="src/storage/fish/images/"+docs[0].img_file;
        else if(i==1)
          path_to_delete="src/storage/fish/videos/"+docs[0].video_file;
      
        file_system.unlink(path_to_delete,(err)=>{
          if(err) throw err
          console.log('deleted files')
        });
      }
    }

    else if(req.files[0].originalname==docs[0].img_file ){
      path_to_delete="src/storage/fish/images/"+docs[0].img_file;
      file_system.unlink(path_to_delete,(err)=>{
        if(err) throw err
        console.log('deleted files')
      });
    }

    else if(req.files[1].originalname==docs[0].video_file){
      path_to_delete="src/storage/fish/videos/"+docs[0].video_file;
      file_system.unlink(path_to_delete,(err)=>{
        if(err) throw err
        console.log('deleted files')
      });
    }

     });
  });
 res.redirect('/data')
}

});





//upload user profile picture and data
app.post('/user_info',upload_admin.single('profile_img'),urlencodedParser,function(req,res,next){

  if(req.file==null){
  var user_name=req.body.user_name;
  var email=req.body.email;
  var f_name=req.body.first_name;
  var l_name=req.body.last_name;
  var address=req.body.address;
  var city=req.body.city;
  var country=req.body.country;
  var about=req.body.about_me;
  var findDocuments = function(db, callback) {
    var collection = db.collection('space_usage');
    collection.find({name:'Nilaksha Deemantha'}).toArray(function(err, docs) {
      if(err) throw err;
      callback(docs);
    });
  };
  var data_obj={user_name:user_name,email:email,first_name:f_name,last_name:l_name,address:address,city:city,country:country,about:about,image_path:null,file_name:null,file_originalname:null,img_size:null};
 
  mongodb.mongo.connect(mongodb.url,{useNewUrlParser:true},function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    dbo.collection("user_details").updatetOne({first_name:'Nilaksha'},{$set:data_obj}, function(err, res) {
      if (err) throw err;
      console.log("Document updated");
    });
    var size_used=0;

    findDocuments(dbo, function(docs) {
      size_used+=docs[0].space;
      console.log(size_used)
      dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used}}, function(err, res) {
        if (err) throw err;
        console.log("size updated");
        db.close();
      });
    });
  });
 res.redirect('/user')
  }

  else if(req.file.size>maxSize*1024*1024){
    res.send('Error 413->File is too large. Maximum size:40MB')
  }
  
  else{
  var user_name=req.body.user_name;
  var email=req.body.email;
  var f_name=req.body.first_name;
  var l_name=req.body.last_name;
  var address=req.body.address;
  var city=req.body.city;
  var country=req.body.country;
  var about=req.body.about_me;
  var file=req.file;
  var img_path="storage/admin/"+file.filename;
  var findDocuments = function(db, callback) {
    var collection = db.collection('space_usage');
    collection.find({name:'Nilaksha Deemantha'}).toArray(function(err, docs) {
      if(err) throw err;
      callback(docs);
    });
  };
  console.log(img_path)
  var data_obj={user_name:user_name,email:email,first_name:f_name,last_name:l_name,address:address,city:city,country:country,about:about,image_path:img_path,file_name:file.filename,file_originalname:file.originalname,img_size:file.size};
 
  mongodb.mongo.connect(mongodb.url,{useNewUrlParser:true},function(err,db){
    if (err) throw err;
    var dbo = db.db("aquakingdom");
    dbo.collection("user_details").updatetOne({first_name:'Nilaksha'},{$set:data_obj}, function(err, res) {
      if (err) throw err;
      console.log("Document updated");
    });
    var size_used=file.size;

    findDocuments(dbo, function(docs) {
      size_used+=docs[0].space;
      console.log(size_used)
      dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_used}}, function(err, res) {
        if (err) throw err;
        console.log("size updated");
        db.close();
      });
    });
});
 res.redirect('/user')
}
});






//fetch_data
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






//delete data
app.get('/delete_data/:id',urlencodedParser,function(req,res){
  console.log(req.params)

  var removeproducts = function(db, callback) {
    db.collection('fish_details').deleteOne({code:req.params.id},
       function(err, results) {
          console.log('product deleted');
          if(err) throw err;
          callback(results);
       }
    );
 };

 var findDocuments = function(db, callback) {
  var collection = db.collection('fish_details');
  console.log(req.params.id)
  collection.find({code:req.params.id}).toArray(function(err, docs) {
    if(err) throw err;
    // assert.equal(err, null);
    callback(docs);
  });
};

var findStorage = function(db, callback) {
  var collection = db.collection('space_usage');
  collection.find({name:'Nilaksha Deemantha'}).toArray(function(err, doc) {
    if(err) throw err;
    callback(doc);
  });
};

mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true }, function(err, db){
  //  assert.equal(null, err);
  if(err) throw err;
  var dbo = db.db("aquakingdom");
  var size_updated;
 findDocuments(dbo, function(docs) {
  var path_to_delete;
  console.log(docs[0])
  size_updated=docs[0].img_size+docs[0].video_size;
  for(var i=0;i<2;i++){
    if(i==0)
      path_to_delete="src/storage/fish/images/"+docs[0].img_file;
    else if(i==1)
      path_to_delete="src/storage/fish/videos/"+docs[0].video_file;
  
    file_system.unlink(path_to_delete,(err)=>{
      if(err) throw err
      console.log('deleted files')
    });
  }

 });

 findStorage(dbo,function(doc){
  console.log(size_updated)
  console.log(doc[0].space+'space');
  dbo.collection("space_usage").updateOne({name:'Nilaksha Deemantha'},{$set:{space:size_updated-doc[0].space}}, function(err, res1) {
    if (err) throw err;
    console.log("size updated");
    db.close();
  });
  console.log('Hello')
});

 removeproducts(dbo, function(results) {
   console.log(results+'res')

 });   

});
});





//search_data
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






//load update_fish_data
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







//change_visibility_to_false
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







//change_visibility_to_true
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






//load_visibility_updated
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







//load user-details
app.get('/user_profile_details',urlencodedParser,function(req,res){
  var user_image_path;
  var user_space;
  var user_bio;
  var user_name;
  var findUserDetails= function(db, callback) {
    var collection = db.collection('user_details');
    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    var dbo = db.db("aquakingdom");

    findUserDetails(dbo, function(docs) {
      console.log(docs);
      user_image_path=docs[0].image_path;
      user_bio=docs[0].about;
      user_name=docs[0].first_name+' '+docs[0].last_name;
      db.close();
      var json_obj={img_path:user_image_path,about:user_bio,name:user_name};
      console.log(json_obj)
      res.json(json_obj);
    });

  });

});






//load memory usage
app.get('/memory_used',urlencodedParser,function(req,res){
  
  var memoryUsage= function(db, callback) {
    var collection = db.collection('space_usage');
    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      callback(docs);
    });
  }

  mongodb.mongo.connect(mongodb.url,{ useNewUrlParser: true },function(err, db) {
    if(err) throw err;
    var dbo = db.db("aquakingdom");

    memoryUsage(dbo, function(docs) {
      console.log(docs);
      var _byte=docs[0].space
      var _mb=docs[0].space/(1024*1024)
      _mb=_mb.toFixed(2)
      var _kb=docs[0].space/1024
      _kb=_kb.toFixed(2)
      var _gb=docs[0].space/(1024*1024*1024)
      _gb=_gb.toFixed(2)
      var space={mb:_mb,gb:_gb,kb:_kb,byte:_byte}
      console.log(space)
      res.json(space)
      db.close();
    });

  });

});







//reset passwords
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
  
        }
      });
    });

    db.close();
});

 
});


console.log('Listening to 4600');
server.listen(4600);


 
 
 