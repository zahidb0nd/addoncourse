const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const port = 5000;

//A sample GET route to send product

app.get("/api/product", (req, res) => {
  const products = [
    { id: 1, name: "laptop", price: 1000 },

    { id: 2, name: "iphone", price: 500 },

    { id: 3, name: "smartwatch", price: 100 },
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log("Server Running on http://localhost:5000");
});
