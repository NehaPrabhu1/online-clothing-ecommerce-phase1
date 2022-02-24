let pool = require('../db/connection');

function getOrders(req, res) {
    pool.query("SELECT * FROM orders",(error, result) => {
      //console.log(result.rows);
      if (error) {
        return res.status(500).send("Internal Error on server");
      } else {
        return res.status(200).send(result.rows);
      }
    });
  }

  function getOrderByID(req,res){
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM orders WHERE orderid = $1', [id], (error, result) => {
      if (error) {
        return res.status(500).send("Internal Error on server");
      }
      return res.status(200).json(result.rows);
    })
  }

  function getOrderLines(req,res){
      pool.query("SELECT * from orderline",(error,result)=>{
          if(error){
              return res.status(500).send("Internal Error on server");
          }
          else{
           
            return res.json(result.rows);
        
          }
      })
  }

  function getOrderLinesByOrderId(req,res){
    const id = parseInt(req.params.id);
      pool.query("SELECT * from orderline WHERE orderid = $1",[id],(error,result)=>{
      if(error){
        return res.status(500).send("Internal Error on server");
      }
      return res.json(result.rows);
    })
  }

  function getTotalAmountByOrderId(req,res){
    const id = parseInt(req.params.id);
    pool.query('select orderid,sum(price) from orderline group by orderid having orderid = $1;', [id],(error,result)=>{
        if(error){
            return res.status(500).send("Internal Error on server");
        }
        else{
            return res.status(200).json(result.rows);
        
        }
    })
  }
  function insertOrder(req,res){
      const { userid, dateoforder,timeoforder} = req.body;
      pool.query('insert into orders (userid,date_of_order,time_of_order) values ($1,$2,$3)',
      [userid,dateoforder,timeoforder],(error,result)=>{
          if(error){
              return res.status(500).send("Internal error on server");
          }
          res.status(201).send(`Order added with ID: ${result.insertId}, amount tally is remaining`);
      });

  }
  function insertOrderline(req,res){
    const id = parseInt(req.params.id);
      const {productid, size, quantiy, price} = req.body;
      poo

  }
  function updateOrderAmount(){

  }
  function deleteOrderLine(){

  }
  function updateOrderLine(){

  }
  module.exports = {getOrders,getOrderByID,getOrderLines,getOrderLinesByOrderId,getTotalAmountByOrderId,
    insertOrder,insertOrderline,updateOrderAmount,updateOrderLine,deleteOrderLine};