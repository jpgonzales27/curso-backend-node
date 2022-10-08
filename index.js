const express = require('express'); //importamos express
const app = express(); //construye una app de express
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi primer server en express');
});

app.get('/ruta', (req, res) => {
  res.send('Hola desde la nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      price: 10000,
    },
    {
      name: 'producto 2',
      price: 5000,
    },
  ]);
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

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
