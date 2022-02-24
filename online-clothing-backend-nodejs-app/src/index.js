const express = require('express');
//console.log(express);
//app will create a web server
const reqi = require('express/lib/request');
const order = require("./order");

const app = express();
app.use(express.json());

//Routing
app.get('/',function(req,res){
    res.send('<h1>Hello World, this is nodejs</h1>');
});
app.get('/orders',order.getOrders);

app.get('/orders/:id',order.getOrderByID);

const port = 3000;
app.listen(port,function(){
    console.log("Web server started successfully");
});