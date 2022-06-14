const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const productRouter = require('./routes/products');
const saleRouter = require('./routes/sales');

app.use('/products', productRouter);
app.use('/sales', saleRouter);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});