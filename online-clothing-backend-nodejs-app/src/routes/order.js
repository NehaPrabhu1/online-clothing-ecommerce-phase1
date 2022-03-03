const express = require('express');
//import pg package
const router = express.Router();

const order = require('./order.db');


  //Routing
router.get('',function(req,res){
  res.send(`<h1>For Orders</h1>`);
});
/************
      For Order processing - http://localhost:3000//api/user/orderpage
******************* */

//get all orders
router.get('/orders', order.getOrders);

//get particular order
router.get('/orders/:id',order.getOrderByID);

//get all orderlines - every order has many orderlines
router.get('/orderlines',order.getOrderLines);

//get all orderlines of particular order, one orderline for each product ordered
router.get('/orderlines/:id',order.getOrderLinesByOrderId);

//get total amount of one order
router.get('/totalamount/:id',order.getTotalAmountByOrderId);

//post order
router.post('/orders',order.insertOrder);

//post orderlines for particular orderid
router.post('/orderlines',order.insertOrderline);

//put total amount in the order
//router.put('/totalamount/:id',order.updateOrderAmount);

// //update quantity of orderline
// router.put('/orderlines/:id',verifyToken,order.updateOrderLine);

// //delete orderline
// router.delete('/orderlines/:id',verifyToken,order.deleteOrderLine);

//******************************************************************* */

module.exports = router;

  