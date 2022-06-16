// referencia de Number.isInteger https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger 

function validateProductId(productId) {
  if (productId === undefined) return false;

  return true;
}

function validateQuantity(quantity) {
  if (quantity === undefined) return false;

  return true;
}

function validateValueQuantity(quantity) {
  if (Number.isInteger(quantity) && quantity <= 0) return false;
  return true;
}

module.exports = {
  validateProductId,
  validateQuantity,
  validateValueQuantity,
}; 
