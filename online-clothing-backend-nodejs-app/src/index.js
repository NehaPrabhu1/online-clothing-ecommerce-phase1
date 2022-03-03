const express = require('express');
const app = express();

//app will create a web server
const reqi = require('express/lib/request');
const orderRoute = require("./routes/order");
const productsRoute = require("./routes/products/products");

app.use(express.json());
//For orders
app.use("/api/clothing/auth",orderRoute);

//For products
app.use("/api/clothing/auth",productsRoute);





const port = 3000;
app.listen(port,function(){
    console.log("Web server started successfully");
});