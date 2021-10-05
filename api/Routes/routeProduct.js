const express = require('express');
const router = express.Router();
const controllerProduct = require('../Controllers/controllerProducts');

module.exports = () => {
  router.get('/all', controllerProduct.getAllProducts);

  return router;
}
