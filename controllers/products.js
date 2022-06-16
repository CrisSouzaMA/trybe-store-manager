const productService = require('../services/products');

const getAll = async (_req, res) => {
  const allproducts = await productService.getAll();

  res.status(200).json(allproducts);
}

const getById = async (req, res) => {
  try {
  const { id } = req.params;
  const productId = await productService.getById(Number(id));
  return res.status(200).json(productId);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
}

const create = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newproduct = await productService.create({ name, quantity });
    return res.status(201).json(newproduct);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const upProduct = await productService.update({ id, name, quantity });
    return res.status(200).json(upProduct);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

const delet = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.delet(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  delet,
}