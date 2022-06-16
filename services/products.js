const productModel = require('../models/products');

const getAll = async () => await productModel.getAll();

const getById = async (id) => {
  const productId = await productModel.getById(id);
  
  if (!productId || productId === undefined) throw new Error('Product not found');

  return productId;
}

const getByName = async (name) => {
  const [searchProduct] = await productModel.getByName(name);
  return searchProduct; 
}

const create = async ({ name, quantity }) => {
  const checkP = await getByName(name);
  if(checkP !== undefined && checkP.name === name) throw new Error('Product already exists');

  const newProd = await productModel.create({ name, quantity });
  return newProd;
}

const update = async ({ id, name, quantity }) => {
  const checkId = await getById(id);
  if (checkId === undefined) throw new Error('Product not found');

  const updateProd = await productModel.update({ id, name, quantity });
  return updateProd;
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
}