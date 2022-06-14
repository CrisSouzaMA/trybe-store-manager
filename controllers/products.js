const productService = require('../services/products');

const getAll = async (_req, res) => {
  const allproducts = await productService.getAll();

  res.status(200).json(allproducts);
}

const getById = async (req, res) => {
  try {
  const { id } = req.params;
  const productId = await productService.getById(id);
  return res.status(200).json(productId);
  } catch (e) {
    return res.status(404).end()
  }
}

module.exports = {
  getAll,
  getById,
}