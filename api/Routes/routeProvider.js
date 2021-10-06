const express = require('express');
const router = express.Router();
const controllerProviders = require('../Controllers/controllerProviders');

module.exports = () => {
  router.get('/all', controllerProviders.getAllProviders);
  router.get('/:providerId', controllerProviders.searchById);
  router.post('/', controllerProviders.addProvider);
  router.delete('/:providerId', controllerProviders.deleteProvider);

  return router;
};
