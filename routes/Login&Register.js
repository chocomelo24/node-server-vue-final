const jwt = require("jsonwebtoken");
const con = require("../lib/dbConnection");
require("dotenv").config;

async function login(req, res) {
  const user = {
    email: req.body.email,
  };
  try {
    let sql = "SELECT * From users Where email =  ";
    con.query();
  } catch (error) {}
}
