const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

router.get('/', productController.getAll);
router.get('/:id', productController.getById);

module.exports = router;