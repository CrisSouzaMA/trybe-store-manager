const helpValidation = require('./checkDataSale');

const validateProductSale = (req, res, next) => {
  const sale = req.body;
  // feito com ajuda do Thadeu para validar o tipo da variavel sale - caso não seja array quebra o servidor
  // if (sale instanceof Array) {
  for (let i = 0; i < sale.length; i += 1) {
    if (helpValidation.validateProductId(sale[i].productId) === false) {
      return res.status(400).json({ message: '"productId" is required' });
    }
  }
  /* } else {
     return res.status(400).json({ message: 'Sale precisa ser array' });
   } */
  next();
};

const validateQuantitySale = (req, res, next) => {
  const sale = req.body;

  for (let i = 0; i < sale.length; i += 1) {
    if (helpValidation.validateQuantity(sale[i].quantity) === false) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (helpValidation.validateValueQuantity(sale[i].quantity) === false) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }

  next();
};

module.exports = {
  validateSale: [
    validateProductSale,
    validateQuantitySale,
  ],
}; 