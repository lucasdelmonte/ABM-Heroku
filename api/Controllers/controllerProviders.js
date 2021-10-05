const fs = require('fs');

const modelProvider = require('../Models/modelProvider');

// Obtener proveedores
exports.getAllProviders = async (req, res) => {
  try {
    const response = await modelProvider.find();
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
