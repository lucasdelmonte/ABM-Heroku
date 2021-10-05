const express = require('express');
const router = express.Router();
const Provider = require('../../Models/provider');

router.get('/', async (req, res) => {
  try {
    const provider = await Provider.find();
    res.json(provider);
  } catch {
    res.json({ message: error });
  }
});

module.exports = router;
