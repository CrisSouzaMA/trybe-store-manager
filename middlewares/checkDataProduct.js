function validateLengthName(name) {
  if (name.length < 5) return false;

  return true;
}

function validateName(name) {
  if (name === undefined || typeof name !== 'string') return false;

  return true;
}

function validateValueQuantity(quantity) {
  if (quantity <= 0) return false;

  return true;
}

function validateQuantity(quantity) {
  if (quantity === undefined || typeof quantity !== 'number') return false;

  return true;
}

module.exports = {
  validateLengthName,
  validateName,
  validateQuantity,
  validateValueQuantity,
}; 