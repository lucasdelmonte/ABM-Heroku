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