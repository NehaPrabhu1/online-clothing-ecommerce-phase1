const express = require('express');
const app = express();

//app will create a web server
const reqi = require('express/lib/request');
const orderRoute = require("./routes/order");
const productsRoute = require("./routes/products/products");
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors);

app.use(express.json());
//For orders
app.use("/api/clothing/auth",orderRoute);

//For products
app.use("/api/clothing/auth",productsRoute);

// for every incoming request, bodyParser will parse data from bytes into JSON object &
// vice-versa for every reponse JSON into bytes
// Will work with POST and PUT/PATCH
app.use(bodyParser.json());


// middleaware - to enable cors at server-side
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept Content-Type');
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept Content-Type');

    next();
}



const port = 3000;
app.listen(port, function () {
    console.log("Web server started successfully");
});