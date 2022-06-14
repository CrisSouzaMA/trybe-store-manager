const saleService = require('../services/sales');

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();
  res.status(200).json(allSales);
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const saleId = await saleService.getById(Number(id));
    res.status(200).json(saleId);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
}

module.exports = {
  getAll,
  getById,
}