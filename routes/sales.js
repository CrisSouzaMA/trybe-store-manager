const express = require('express');

const router = express.Router();

const saleController = require('../controllers/sales');

router.get('/', saleController.getAll);
router.get('/:id', saleController.getById);

module.exports = router;