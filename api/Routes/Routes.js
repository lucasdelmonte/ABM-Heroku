const productsRoutes = require('./api/Routes/Products/routeProduct');
const providersRoutes = require('./api/Routes/Providers/routeProvider');

app.use('/api/products/', productsRoutes());
app.use('/api/providers/', providersRoutes());
