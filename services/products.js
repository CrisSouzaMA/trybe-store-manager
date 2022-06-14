const productModel = require('../models/products');

const getAll = async () => await productModel.getAll();

const getById = async (id) => {
  const productId = await productModel.getById(id);
  
  if (!productId || productId === undefined) throw new Error('Product not found');

  return productId;
}

module.exports = {
  getAll,
  getById,
}