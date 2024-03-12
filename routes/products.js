const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const total = require('../total')
const convert = require('../convert')

// Products Array
const products = [{ id: '1', name: 'Playstation 5', inStock: false }];

router.get('/', (req, res) => {
    console.log("Get all products");
    console.log("All products " + products.length);
    console.log("Before return");
    res.json(products);
});

router.get('/:id', (req, res, next) => {
    console.log("Target id = " + req.params.id);
    const product = products.find(
        (product) => product.id === String(req.params.id)
    );
    console.log("Search result is " + product)
    if (!product) {
        console.log("Found nothing");
        return next(createError(404, 'Not Found'));
    }
    console.log("Before return");
    res.json(product);
});

router.post('/', (req, res, next) => {
    console.log("Create new product");
    const { body } = req;
    if (typeof body.name !== 'string') {
        return next(createError(400, 'Validation Error'));
    }
    console.log("Create new ID");
    var newId = products.length + 1;
    const newProduct = { id: "'" + newId + "'", name: body.name, inStock: false, };
    products.push(newProduct);
    console.log("Before return");
    res.status(201).json(newProduct);
});

router.post('/total', (req, res) => {
    console.log("POST Total");
    const { body } = req;
    var values = body.values;
    console.log("values " + values);
    var result = total(values);
    console.log("total " + result);
    var convertResult = convert(result);
    console.log("Before return");
    res.json(convertResult);
});

module.exports = router;