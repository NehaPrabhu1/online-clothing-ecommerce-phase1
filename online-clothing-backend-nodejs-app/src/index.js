const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/order");
const deliveryRoute = require("./routes/delivery");
const productRoute = require("./routes/product");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.get("/api/test",()=>{
    console.log("Test is successful");
})

app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/user/auth",authRoute);
app.use("/api/user/orderpage",orderRoute);
app.use("/api/user/order",deliveryRoute);
app.use("/api/clothing/auth",productRoute);


app.listen(3000, ()=>{
    console.log("Backend Server is running...");
})