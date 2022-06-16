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

const create = async (req, res) => {
  try {
    const sale = await saleService.create(req.body);
    return res.status(201).json(sale);
  } catch (err) {
    if (err) {
      return res.status(422).json({ message: err.message });
    }
    return res.status(404).json({ message: 'Sale not found' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {arrayOfSales} = req.body;
    const upsale = await saleService.update(Number(id), arrayOfSales);
    return res.status(200).json(upsale);
  } catch (error) {
    return res.status(404).json({ message: err.message });
  }
}

const delet = async (req, res) => {
  try {
    const { id } = req.params;
    const NumberId = Number(id);
    await saleService.deleteSaleId(NumberId);
    return res.status(204).json();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  delet,
}