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

exports.addProvider = async (req, res) => {
  try {
    const provider = new modelProvider(req.body);
    const { company, name } = req.body; //data from POSTMAN
    if (!company || !name) {
      return res.status(400).json({
        error: true,
        message: 'Missing data entry'
      });
    }
    const newProvider = await provider.save();
    return res.status(201).json({
      dato: newProvider,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'Total error'
    });
  }
};

exports.searchById = async (req, res) => {
  try {
    const provider = await modelProvider.findById(req.params._id);
    res.json(provider);
  } catch (error) {
    res.json({ message: 'provider not found' });
  }
};
