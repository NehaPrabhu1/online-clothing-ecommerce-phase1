const express = require('express');
//console.log(express);
//app will create a web server
const app = express();
app.get('/',function(req,res){
    res.send('<h1>Hello World, this is nodejs</h1>');
});
const port = 3000;
app.listen(port,function(){
    console.log("Web server started successfully");
});