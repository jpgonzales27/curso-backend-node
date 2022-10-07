const express = require('express'); //importamos express
const app = express(); //construye una app de express
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi primer server en express');
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
