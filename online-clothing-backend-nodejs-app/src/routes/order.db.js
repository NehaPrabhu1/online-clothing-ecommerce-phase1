let pool = require('../db/connection');
const { verifyToken } = require('./verifyToken');
const moment = require('moment');
const format = require('pg-format');

function getOrders(req, res) {
  let userid = 2;
//   verifyToken(req,res,()=>{
//     userid = req.user.id; <----add later-----very imp***>
// });
    pool.query("SELECT * FROM orders where userid = $1  order by date_of_order desc, time_of_order desc",[userid],(error, result) => {
      if (error) {
        console.log(error);
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
      pool.query("SELECT orderlineid, orderid, orderline.productid, size, quantity, orderline.price, product_name, brand_name, product_image from orderline,products,brands WHERE orderid = $1 AND orderline.productid = products.productid AND products.brandid = brands.brandid",[id],(error,result)=>{
      if(error){
        return res.status(500).send("Internal Error on server");
      }
      return res.json(result.rows);
    })
  }

  function getTotalAmountByOrderId(req,res){
    const id = parseInt(req.params.id);
    pool.query('select orderid,sum(price) from orderline group by orderid having orderid = $1;', 
    [id],(error,result)=>{
        if(error){
            return res.status(500).send("Internal Error on server");
        }
        else{
            return res.status(200).json(result.rows);
        
        }
    })
  }
  function insertOrder(req,res){
      const { userid, total_payment} = req.body;
      const dateoforder = moment().format('YYYY-MM-DD HH:mm:ss'); 
      const timeoforder = moment().format('HH:mm:ss');
      console.log(typeof dateoforder)
      pool.query('insert into orders (userid,date_of_order,time_of_order,total_payment) values ($1,$2,$3,$4) RETURNING orderid',
      [userid,dateoforder,timeoforder,total_payment],(error,result)=>{
          if(error){
              return res.status(500).send(error);
          }
          return res.status(201).json(result.rows[0].orderid);
      });

  }
  function insertOrderline(req,res){
      const orderliney = req.body;
      const data= [];
      for(var orderline of orderliney){
        data.push(Object.values(orderline))
      }
      let query=format('INSERT INTO orderline (orderid,productid,size,quantity,price) VALUES %L',data);
      pool.query(query,[],(error,result)=>{
        if(error){
          return res.status(500).send(error);
        }
        return res.status(201).json(result);
      });
    }

  // function updateOrderAmount(req,res){
  //     const id = parseInt(req.params.id)
  //     pool.query(`update orders set total_payment = (select sum(price) from orderline 
  //     group by orderid having orderid = $1) where orderid = $1`, [id],(error,result)=>{
  //         if(error){
  //           return res.status(500).send("Internal error on server");
  //         }
  //         res.status(201).send('Total amount to be paid is updated');  
  //     })


  //}
//   function deleteOrderLine(){


//   }
//   function updateOrderLine(){

//   }
  module.exports = {getOrders,getOrderByID,getOrderLines,getOrderLinesByOrderId,getTotalAmountByOrderId,
    insertOrder,insertOrderline};