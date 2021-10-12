const express = require('express');
const router = express.Router();

const productsRoutes = require('./Products/routeProduct');
const providersRoutes = require('./Providers/routeProvider');

router.use('/api/products/', productsRoutes());
router.use('/api/providers/', providersRoutes());

module.exports = router;
