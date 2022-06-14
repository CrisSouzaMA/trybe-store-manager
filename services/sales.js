const saleModel = require('../models/sales');

const getAll = async () => await saleModel.getAll();

module.exports = {
  getAll,
}