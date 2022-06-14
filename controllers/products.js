const productService = require('../services/products');

const getAll = async (_req, res) => {
  const allproducts = await productService.getAll();

  res.status(200).json(allproducts);
}

module.exports = {
  getAll,
}