const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const total = require("../total");
const convert = require("../convert");

// Products Array
const products = [{ id: "1", name: "Playstation 5", inStock: false }];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res, next) => {
  const product = products.find(
    (product) => product.id === String(req.params.id)
  );
  if (!product) {
    return next(createError(404, "Not Found"));
  }
  res.json(product);
});

router.post("/", (req, res, next) => {
  const { body } = req;
  if (typeof body.name !== "string") {
    return next(createError(400, "Validation Error"));
  }
  var newId = products.length + 1;
  const newProduct = { id: "'" + newId + "'", name: body.name, inStock: false };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.post("/total", (req, res) => {
  const { body } = req;
  var values = body.values;
  var result = total(values);
  var convertResult = convert(result);
  res.json(convertResult);
});

module.exports = router;
