const helpValidation = require('./checkDataProduct');

const validateProductName = (req, res, next) => {
  const { name } = req.body;

  if (helpValidation.validateName(name) === false) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (helpValidation.validateLengthName(name) === false) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const validateProductQuantity = (req, res, next) => {
  const { quantity } = req.body;

if (helpValidation.validateQuantity(quantity) === false) {
  return res.status(400).json({ message: '"quantity" is required' });
}
if (helpValidation.validateValueQuantity(quantity) === false) {
  return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
}

next();
};

module.exports = {
  validateProduct: [
    validateProductName,
    validateProductQuantity,
  ],
}; 