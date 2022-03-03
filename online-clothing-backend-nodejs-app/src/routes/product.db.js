/* Rachel Sumner 25/2/2022 */

let pool = require('../db/connection');

  function getProductByID (req,res) {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM products WHERE productid = $1', [id],
    (error, result) => {
      if (error) {
        return res.status(500).send("Internal Error on server");
      }
      return res.status(200).json(result.rows);
    });
  }

  function getProductReviewsById (req, res) {
      const id = parseInt(req.params.id);
      pool.query('SELECT * FROM reviews WHERE productid = $1',
       [id], (error, result) => {
        if (error) {
            return res.status(500).send("Internal Error on server");
          }
          return res.status(200).json(result.rows);
      });
  }

  function getProductsByGender(req,res){
      const gender = req.params.gender;
      pool.query('select * from products inner join categories using(categoryid) where categories.category_gender = $1',[gender],
      (error,result)=>{
          if(error){
            return res.status(500).send("Internal Error on server");
          }
          return res.status(200).json(result.rows);
      } )
  }

  function filterProducts (req, res) {
    /* Filters json objects by given key values
    e.g. if the url is /products?brandid=2, all objects of brand 2 are returned
    */
    pool.query('SELECT * FROM products',
        (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Internal Error on server")
        } else {
            const filters = req.query;
            const filteredProducts = result.rows.filter(product => {
                let isValid = true;
                for (key in filters) {
                    isValid = isValid && product[key] == filters[key];
                }
                return isValid
            });
            res.status(200).send(filteredProducts);
        }
    })
  }

  function searchProducts(req, res) {
    /* Super basic search engine allows queries using ?q=
        e.g. "search/products?q=Men blue" will return all products containing "Men blue" somewhere,
        "search/products?q=2" will return all products that have some id containing a 2.
        Much broader than filter.
        Will return an error if anything other than a search query is attempted, e.g. filtering.
    */
    if (req.query['q']) {
        pool.query('SELECT * FROM products',
        (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Internal Error on server");
        }
        else {
            const searchText = req.query['q'];
            searchedProducts = result.rows.filter( product => {
                for (key in product) {
                    if (product[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    }
                }
                return false;
            });
            res.status(200).send(searchedProducts);
        }
        });
    } else {
        return res.status(500).send("You have not entered a query.");
    }
}


module.exports = { getProductByID, getProductReviewsById, filterProducts, searchProducts, getProductsByGender}
