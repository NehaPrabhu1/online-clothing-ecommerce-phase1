/* Rachel Sumner 25/2/2022 */

const express = require('express');
//import pg package
const router = express.Router();

const products = require('./products.db');

router.get('',function(req,res){
    res.send(`<h1>For Products</h1>`);
});

/* GET products */

//filter for a specific key
//will get all products if no key is specified
router.get('/products', products.filterProducts);

//get a particular product
router.get('/products/:id',products.getProductByID);

//get a particular product's reviews
router.get('/products/:id/reviews',products.getProductReviewsById);

//General product search
router.get('/search/products', products.searchProducts);


module.exports = router;