const express = require('express');

const router = express.Router();

const saleController = require('../controllers/sales');

const saleMiddleware = require('../middlewares/validationSale');

router.get('/', saleController.getAll);
router.get('/:id', saleController.getById);

router.use(saleMiddleware.validateSale);

router.post('/', saleController.create);

module.exports = router;