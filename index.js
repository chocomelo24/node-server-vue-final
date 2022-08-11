// Import needed libraries
const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally

// Import routes

const productsRoute = require("./routes/productsRoute");
const product_categoriesRoute = require("./routes/product_categoriesRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const ordersRoute = require("./routes/ordersRoute");
const order_detailsRoute = require("./routes/order_detailsRoute");
const userRoute = require("./routes/userRoute");
const router = require("./routes/userRoute");
const con = require("./lib/dbConnection");

// Configure Server
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors
app.use(express.static("public"));

// This is where we check URLs and Request methods to create functionality
// GET '/' is always what will be displayed on the home page of your application
// app.get("/landing.html", express.static(__dirname + "/landing.html"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index");
});

app.use("/users", userRoute);
app.use("/products", productsRoute);
app.use("/product_categories", product_categoriesRoute);
app.use("/categories", categoriesRoute);
app.use("/orders", ordersRoute);
app.use("/order_details", order_detailsRoute);
// Set up server to start listening for requests
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});
