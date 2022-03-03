const pool = require("../db/connection");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.get("/:id",verifyTokenAndAdmin, (req,res)=>{
    pool.query("select * from users", (error,result)=>{
        if(error){
            return res.send("Error")
        }
        return res.send(result.rows);
    })
})

module.exports = router;