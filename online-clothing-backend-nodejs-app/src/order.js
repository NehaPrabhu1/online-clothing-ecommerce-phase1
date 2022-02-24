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

  module.exports = {getOrders,getOrderByID};