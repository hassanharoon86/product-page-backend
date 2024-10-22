const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const product = {
  title: 'Sample Product',
  description: 'This is a sample product description.',
  price: 29.99,
  image: 'https://via.placeholder.com/400'
};

app.get('/api/product', (req, res) => {
  res.json(product);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
