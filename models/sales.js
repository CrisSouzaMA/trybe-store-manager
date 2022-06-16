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

const create = async (arrayOfSales) => {
  const items = [];

  const [querySales] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  await arrayOfSales.forEach(({ productId, quantity }) => {
    const querySalesProducts = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) 
    VALUES (?,?,?)`;

    connection.execute(querySalesProducts, [querySales.insertId, productId, quantity]);

    items.push({ productId, quantity });
  });

  return {
    id: querySales.insertId,
    itemsSold: items,
  };
}

module.exports = {
  getAll,
  getById,
  create,
}