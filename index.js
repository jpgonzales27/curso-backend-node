const express = require('express'); //importamos express
const routerApi = require('./routes');

const app = express(); //construye una app de express
const port = 3000;
app.use(express.json()); //habilita recibir formatos JSON en express
routerApi(app);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
