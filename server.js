
const express=require('express');
const app=express();
const { check, validationResult } = require('express-validator');

app.get('/',function(req,res){
    res.send('Hello');
})

console.log('Listening to 4600');


app.listen(4600);


 
 
 