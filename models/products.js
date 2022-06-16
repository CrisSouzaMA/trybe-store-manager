const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);

  return result;
}

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id =?';
  const [result] = await connection.execute(query, [id]);

  return result.map(({ id, name, quantity }) => ({
    id,
    name,
    quantity,
  }))[0];
}

const getByName = async (name) => {
  const query = 'SELECT id, name, quantity FROM StoreManager.products WHERE name=?';
  const [product] = await connection.execute(query, [name]);

  return product;
}

const create = async ({ name, quantity }) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?,?);'
  const [newproduct] = await connection.execute(query, [name, quantity]);

  return { id: newproduct.insertId, name, quantity };
}

const update = async ({ id, name, quantity }) => {
  const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
  await connection.execute(query, [name, quantity, id]);

  return { id, name, quantity };
}

const delet = async (id) => {
  const query = 'DELETE StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
}

module.exports = {
  getAll,
  getById,
  create,
  getByName,
  update,
  delet,
}