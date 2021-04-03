var express=require('express');

var api=express();

var  PORT=process.env.PORT || 5555;

api.get("/staj",function(req,res){

    res.status(200).send("Hello Word from Node.JS!")
    console.log("Hello Word from Node.JS!");
});
api.get("/node",function(req,res){

    res.status(200).send("Hello Word from Node.JS!")
    console.log("Hello Word from Node.JS!");
});
api.listen(PORT,()=>{
    
});
