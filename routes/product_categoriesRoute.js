const express = require("express");
const router = express.Router();
const con = require("../lib/dbConnection");

router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM product_categories", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM product_categories where product_categories_id =${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.post("/", (req, res) => {
  const { product_id, category_id } = req.body;
  try {
    con.query(
      `INSERT into product_categories (	product_id,	category_id
) 
      values ('${product_id}', '${category_id}')`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// edit product
router.put("/:id", (req, res) => {
  const {
    sku,
    name,
    price,
    weight,
    descriptions,
    thumbnail,
    image,
    category,
    create_date,
    stock,
  } = req.body;
  try {
    con.query(
      `UPDATE products SET sku="${sku}",name="${name}",price="${price}",weight="${weight}",descriptions="${descriptions}",thumbnail="${thumbnail}",image="${image}",category="${category}" create_date="${create_date}" stock="${stock}"  WHERE products.user_id="${req.params.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
// delete products
router.delete("/:id", (req, res) => {
  try {
    con.query(
      `DELETE FROM product_categories  WHERE product.product_catergories_id="${req.params.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
