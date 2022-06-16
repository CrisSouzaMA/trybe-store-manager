const saleModel = require('../models/sales');

const getAll = async () => await saleModel.getAll();

const getById = async (id) => {
  const saleId = await saleModel.getById(id);

  if (!saleId) throw new Error('Sale not found');

  return saleId;
}

const create = async (arrayOfSales) => {
  await Promise.all(arrayOfSales.map(async (data) => {
    const productReturn = await ProductModel.getById(data.productId);
    if (productReturn.quantity < data.quantity) {
      throw new Error('Such amount is not permitted to sell');
    }
    productReturn.quantity -= data.quantity;
    await ProductModel.update(productReturn);
  }));
  const createSales = await saleModel.create(arrayOfSales);
  return createSales;
};

module.exports = {
  getAll,
  getById,
  create,
}