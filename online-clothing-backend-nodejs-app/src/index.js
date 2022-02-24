const express = require('express');
//console.log(express);
//app will create a web server
const reqi = require('express/lib/request');
const order = require("./order");

const app = express();
app.use(express.json());

//Routing
app.get('/',function(req,res){
    res.send(`<h1>For Orders:</h1>
    <p><a href="http://localhost:3000/orders">/orders</a></p>
    <p><a href="http://localhost:3000/orders/1">/orders/1</a></p>
    <p><a href="http://localhost:3000/orderlines">/orderlines</a></p>
    <p><a href="http://localhost:3000/orderlines/1">/orderlines/1</a></p>
    <p><a href="http://localhost:3000/totalamount/1">/totalamount/1</a><p>`);
});
/************
        For Order processing
******************* */

//get all orders
app.get('/orders',order.getOrders);

//get particular order
app.get('/orders/:id',order.getOrderByID);

//get all orderlines - every order has many orderlines
app.get('/orderlines',order.getOrderLines);

//get all orderlines of particular order, one orderline for each product ordered
app.get('/orderlines/:id',order.getOrderLinesByOrderId);

//get total amount of one order
app.get('/totalamount/:id',order.getTotalAmountByOrderId);

//post order
app.post('/orders',order.insertOrder);

//post orderlines for particular orderid
app.post('/orderlines/:id',order.insertOrderline);

//put total amount in the order
app.put('/totalamount/:id',order.updateOrderAmount);

//update orderline
app.put('/orderlines/:id',order.updateOrderLine);

//delete orderline
app.delete('/orderlines/:id',order.deleteOrderLine);

//******************************************************************* */

const port = 3000;
app.listen(port,function(){
    console.log("Web server started successfully");
});