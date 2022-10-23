const express = require('express'); //importamos express
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express(); //construye una app de express
const port = 3000;
app.use(express.json()); //habilita recibir formatos JSON en express
routerApi(app);

/*
   Los middlewares deben ser usados despues del router
   tambie el orden en que son colocados define el orden
   en el que se van a ejecutar uno tras otro
*/
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
