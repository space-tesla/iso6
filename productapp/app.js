const express = require("express");
const app = express();

app.use(express.json());

let products = [];

app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.send("Product added successfully");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
// Step 3: Open browser → http://localhost:3000/products (GET request)

// HOW TO TEST CREATE REQUEST (POSTMAN OR TERMINAL):
// Example Terminal Command for Adding Product:
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Laptop","price":45000}' http://localhost:3000/products

// Then use GET request to see products:
// http://localhost:3000/products
