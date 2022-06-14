const res = require('express/lib/response');
const saleService = require('../services/sales');

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();
  res.status(200).json(allSales);
}

module.exports = {
  getAll,
}