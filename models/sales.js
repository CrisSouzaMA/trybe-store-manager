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
}

const update = async (id, arrayOfSales) => {
  const { productId, quantity } = arrayOfSales[0];
  const queryUpSales = `UPDATE StoreManager.sales_products 
  SET product_id = ?, quantity = ? WHERE sale_id = ?;`;

  await connection.execute(queryUpSales, [productId, quantity, id]);

  return {
    saleId: id,
    itemUpdated: [
      { productId, quantity },
    ],
  }
}

const findBySaleId = async (id) => {
  const query = 'SELECT sale_id FROM StoreManager.sales_products WHERE sale_id = ?';

  const [findSale] = await connection.execute(query, [id]);
  return findSale;
};

const delet = async (id) => {
  const query = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
  const query2 = 'DELETE FROM StoreManager.sales WHERE id = ?';
  await connection.execute(query, [id]);
  await connection.execute(query2, [id]);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  delet,
  findBySaleId,
}