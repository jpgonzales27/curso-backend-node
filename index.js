const express = require('express'); //importamos express
const faker = require('faker');

const app = express(); //construye una app de express
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi primer server en express');
});

app.get('/ruta', (req, res) => {
  res.send('Hola desde la nueva ruta');
});

app.get('/productos', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.send('Yo soy filter');
});

app.get('/productos/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  res.json({
    id,
    name: 'producto',
    price: 800,
  });
});

app.get('/categoria/:categoriaId/productos/:productoId', (req, res) => {
  // const id = req.params.id;
  const { categoriaId, productoId } = req.params;
  res.json({
    categoriaId,
    productoId,
  });
});

//query params
app.get('/users', (req, res) => {
  /* los query params son los valores que definimos en la url
  despues el sigo ?
  http://localhost:3000/users?limit=2&offset=3

  const limit = req.query.limit;
  const offset = req.query.offset;*/
  const { limit, offset } = req.query;
  if (req.query) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay query params');
  }
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
