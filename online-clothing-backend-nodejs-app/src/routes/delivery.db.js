let pool = require('../db/connection');
const { verifyToken } = require('./verifyToken');


function postDeliveryAddressOfOrder(req,res){
    const orderid = parseInt(req.params.id);
      const {addressline, street, city, zip, country} = req.body;
      pool.query('insert into deliveryaddress values ($1,$2,$3,$4,$5,$6) returning orderid',
      [orderid, addressline, street, city, zip, country], (error,result)=>{
          if(error){
              return res.status(500).send("Internal error on server");
          }
         res.status(201).json(result.rows[0].orderid); 
      })
  }

function getDeliveryAddressOfOrder(req,res){
    const orderid = parseInt(req.params.id);
    pool.query('SELECT * FROM deliveryaddress WHERE orderid = $1', [orderid], (error, result) => {
      if (error) {
        return res.status(500).send("Internal Error on server");
      }
      return res.status(200).json(result.rows);
    })
  }

  module.exports = {postDeliveryAddressOfOrder,getDeliveryAddressOfOrder};