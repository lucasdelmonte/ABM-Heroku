const express = require('express');
const router = express.Router();

const productsRoutes = require('./Products/routeProduct');
const providersRoutes = require('./Providers/routeProvider');
const usersRoutes = require('./Users/routeUser');

router.use('/products', productsRoutes);
router.use('/providers', providersRoutes);
router.use('/users', usersRoutes);

module.exports = router;