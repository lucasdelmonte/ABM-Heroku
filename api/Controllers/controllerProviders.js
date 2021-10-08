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
    const { company, firstName, lastName } = req.body; //data from POSTMAN
    if (!company || !firstName || !lastName) {
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
    const response = await modelProvider.findById({
      _id: req.params.providerId
    });
    return res.status(200).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'error(404) provider not found or error'
    });
  }
};

exports.searchByfirstName = async (req, res) => {
  try {
    const response = await modelProvider.find({
      firstName: req.params.providerFirstName
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'error(404) provider not found'
      });
    } else {
      return res.status(200).json({
        data: response,
        error: false
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: true,
      message: 'error(404) firstname provider not found'
    });
  }
};

exports.searchBylastName = async (req, res) => {
  try {
    const response = await modelProvider.find({
      lastName: req.params.providerLastName
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'error(404) provider not found'
      });
    } else {
      return res.status(200).json({
        data: response,
        error: false
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: true,
      message: 'error(404) lastname provider not found'
    });
  }
};

exports.searchByEmail = async (req, res) => {
  try {
    const response = await modelProvider.find({
      email: req.params.providerEmail
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'error(404) provider not found'
      });
    } else {
      return res.status(200).json({
        data: response,
        error: false
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: true,
      message: 'error(404) email provider not found'
    });
  }
};

exports.updateProvider = async (req, res) => {
  let id = req.params._id;
  let update = req.body;
  const response = await modelProvider.findByIdAndUpdate(
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
      message: 'error(404) provider not found'
    });
  }
};
