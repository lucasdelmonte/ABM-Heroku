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
    const response = await modelProvider.findOne({
      _id: req.params.providerId
    });

    return res.status(200).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'error(400) provider not found'
    });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    const response = await modelProvider.findOneAndRemove({
      _id: req.params.providerId
    });
    return res.status(202).json({
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
