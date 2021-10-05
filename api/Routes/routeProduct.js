const express = require('express');
const router = express.Router();
const Product = require('../Models/product');

router.get('/', async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch {
    res.json({ message: error });
  }
});

module.exports = router;
