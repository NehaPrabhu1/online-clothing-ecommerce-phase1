const express = require('express');
const app = express();

//app will create a web server
const reqi = require('express/lib/request');
const orderRoute = require("./routes/order");

app.use(express.json());
//For orders
app.use("/api/clothing/auth",orderRoute);





const port = 3000;
app.listen(port,function(){
    console.log("Web server started successfully");
});