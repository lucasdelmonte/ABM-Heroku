require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const conexion_bd = process.env.DB_MONGODB;

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(conexion_bd)
  .then(() => {
    console.log(`connected to the dataBase`);
  })
  .catch((error) => {
    console.log(`database not connected, error ${error}`);
  });

const productsRoutes = require('./api/Routes/product');
const providersRoutes = require('./api/Routes/provider');

app.use('/api/products/', productsRoutes);
app.use('/api/provider/', providersRoutes);

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

console.log('Bienvenido');
