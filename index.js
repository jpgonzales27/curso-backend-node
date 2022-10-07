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
  res.json({
    name: 'producto 1',
    price: 10000,
  });
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
