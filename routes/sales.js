const express = require('express');

const router = express.Router();

const saleController = require('../controllers/sales');

router.get('/', saleController.getAll);

module.exports = router;