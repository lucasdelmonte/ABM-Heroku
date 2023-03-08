const express = require('express');
const router = express.Router();
const ProductController = require('../../Controllers/controllerProducts');

router.get('/all', ProductController.getAllProducts);
router.get('/:_id', ProductController.searchById);
router.put('/:productId', ProductController.updateProduct);
router.post('/', ProductController.addNewProduct);
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;