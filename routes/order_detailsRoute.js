const express = require("express");
const router = express.Router();
const con = require("../lib/dbConnection");

router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM order_details", (err, result) => {
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
      `SELECT * FROM order_details where order_details_id =${req.params.id}`,
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
  const { order_id, product_id, price, sku, quantity } = req.body;
  try {
    con.query(
      `INSERT into order_details (order_id, product_id,	price,	sku, quantity
	) 
      values ( '${order_id}', '${product_id}', '${price}', '${sku}', '${quantity}' )`,
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
