const fs = require('fs');

const modelProduct = require('../Models/modelProduct');

// Obtener productos
exports.getAllProducts = async (req, res) => {
  try {
    const response = await modelProduct.find();
    return res.status(200).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error
    });
  }
};

// Agregar productos
exports.addNewProduct = async (req, res) => {
  try {
    const product = new modelProduct(req.body);
    const { name, description, price, brand } = req.body; 
    if (!name || !description || !price || !brand) {
      return res.status(400).json({
        error: true,
        message: 'Faltan ingresar datos.'
      });
    }
    const newProduct = await product.save();
    return res.status(201).json({
      dato: newProduct,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error
    });
  }
};

// Buscar por id
exports.searchById = async (req, res) => {
  try {
    const response = await modelProduct.findById(req.params._id);

    return res.status(200).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'error(400) product not found'
    });
  }
};

// Actualizar productos
exports.updateProduct= async (req, res) => {
  let id = req.params._id;
  let update = req.body;
  const response = await modelProduct.findByIdAndUpdate(
    id,
    update,
    (error, preview) => {
      if (error) {
        return res.status(500).json({ message: 'error' });
      }
      return res.status(200).json({ preview, update });
    }
  );
};