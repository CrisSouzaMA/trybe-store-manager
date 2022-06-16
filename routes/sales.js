const express = require('express');

const router = express.Router();

const saleController = require('../controllers/sales');

const saleMiddleware = require('../middlewares/validationSale');

router.get('/', saleController.getAll);
router.get('/:id', saleController.getById);

router.delete('/:id', saleController.delet);

router.use(saleMiddleware.validateSale);

router.post('/', saleController.create);
router.put('/:id', saleController.update);

module.exports = router;