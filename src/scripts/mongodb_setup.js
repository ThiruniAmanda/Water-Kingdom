var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

exports.mongo=MongoClient;
exports.url=url;

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
// //   db.close();
// });
