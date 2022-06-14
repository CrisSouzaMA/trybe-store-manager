const productModel = require('../models/products');

const getAll = async () => await productModel.getAll();

module.exports = {
  getAll,
}