const express = require('express'); //importamos express
const routerApi = require('./routes');

const app = express(); //construye una app de express
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
