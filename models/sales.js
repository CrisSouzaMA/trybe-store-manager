const connection = require('./connection');

const getAll = async () => {
  const query =  `SELECT s.date, p.sale_id AS saleId, p.product_id AS productId, p.quantity
  FROM StoreManager.sales s INNER JOIN StoreManager.sales_products p 
  ON s.id = p.sale_id
  ORDER BY p.sale_id`;
  const [result] = await connection.execute(query);

  return result;
}

const getById = async (id) => {
  const query = `SELECT s.date, p.product_id, p.quantity
  FROM StoreManager.sales s INNER JOIN StoreManager.sales_products p
  ON s.id = p.sale_id 
  WHERE s.id=?`;
  const [result] = await connection.execute(query, [id]);

  return result;
}

module.exports = {
  getAll,
  getById,
}