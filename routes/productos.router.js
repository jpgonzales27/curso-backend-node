const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(productos);
});

/*
todas las rutas especificas deben ir antes que las rutas dimanmicas :id
*/
router.get('/filter', (req, res) => {
  res.send('Yo soy filter');
});

/*
  STATUS CODE - - - - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  Informational responses (100–199)
  Successful responses (200–299)
  Redirection messages (300–399)
  Client error responses (400–499)
  Server error responses (500–599)
*/
router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Not Found',
    });
  } else {
    res.status(200).json({
      id,
      name: 'producto',
      price: 800,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

/*
podria ser PUT pero este actualiza todo el obejto
PATCH solo actualiza los campos que le enviamos
*/
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update patch',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
