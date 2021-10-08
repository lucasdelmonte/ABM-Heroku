require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const conexion_bd = process.env.DB_MONGODB;

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(conexion_bd)
  .then(() => {
    console.log(`Connected to the dataBase`);
  })
  .catch((error) => {
    console.log(`Database not connected, error ${error}`);
  });

app.get('/', (req, res) => {
  res.send('server running correctly');
});

const productsRoutes = require('./api/Routes/routeProduct');
const providersRoutes = require('./api/Routes/routeProvider');

app.use('/api/products/', productsRoutes());
app.use('/api/provider/', providersRoutes());

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

console.log('Bienvenido');
