const saleModel = require('../models/sales');

const getAll = async () => await saleModel.getAll();

const getById = async (id) => {
  const saleId = await saleModel.getById(id);

  if (!saleId) throw new Error('Sale not found');

  return saleId;
}

module.exports = {
  getAll,
  getById,
}