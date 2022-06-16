const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

const productMiddleware = require('../middlewares/validationProduct');

router.get('/', productController.getAll);
router.get('/:id', productController.getById);

router.use(productMiddleware.validateProduct);

router.post('/', productController.create);
router.put('/:id', productController.update);

module.exports = router;