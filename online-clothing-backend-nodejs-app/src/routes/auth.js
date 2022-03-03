const pool = require("../db/connection");

const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("",(req,res)=>{
    res.send("Perform login first...");
})
router.post("/login",(req,res)=>{
    const {useremail,password} = req.body;
    pool.query(`select * from users where userid = (SELECT userid FROM login_details 
    WHERE userid = (select userid from users 
    where user_email = $1)
    AND password = crypt($2, password));`,[useremail,password], (err,result)=>{
        if(err){
            return res.status(500).send("Internal Error on server");
        }
        else{
            if(result.rowCount == 1){
                const u = result.rows[0];
                const accessToken = jwt.sign({
                    id:u.userid,
                    role:u.user_role
                },process.env.JWT_SEC,{});
                return res.status(200).json({u, accessToken});
            }
            else{
                return res.status(401).send("Authentication failed");
            }
        }
    })
})
module.exports = router;
