const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'onlineclothing',
    password: 'root',
    port: 5432,
  });

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
    pool.query('select sum(price),orderid from orderline group by orderid having orderid = $1;', [id],(error,result)=>{
        if(error){
            return res.status(500).send("Internal Error on server");
        }
        else{
            return res.status(200).json(result.rows);
        
        }
    })
  }
  function insertOrder(){

  }
  function insertOrderline(){

  }
  function updateOrderAmount(){

  }
  function deleteOrderLine(){

  }
  function updateOrderLine(){

  }
  module.exports = {getOrders,getOrderByID,getOrderLines,getOrderLinesByOrderId,getTotalAmountByOrderId,
    insertOrder,insertOrderline,updateOrderAmount,updateOrderLine,deleteOrderLine};