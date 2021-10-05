const express = require('express');
const router = express.Router();
const controllerProviders = require('../Controllers/controllerProviders');

module.exports = () => {
  router.get('/all', controllerProviders.getAllProviders);
  router.get('/:_id', controllerProviders.searchById);
  router.post('/', controllerProviders.addProvider);

  return router;
};
