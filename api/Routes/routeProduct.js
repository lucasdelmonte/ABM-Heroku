const express = require('express');
const router = express.Router();
const controllerProducts = require('../Controllers/controllerProducts');

module.exports = () => {
  router.get('/all', controllerProducts.getAllProducts);

  router.post('/', controllerProducts.addNewProduct);

  return router;
}


