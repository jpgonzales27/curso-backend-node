const express = require('express');
const productosRouter = require('./productos.router');
const usersRouter = require('./users.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app) {
  const router = express.Router();
  /*
    definimoas que la url del enpoint comensara con
    http://localhost:3000/api/v1/categorias
  */
  app.use('/api/v1', router);
  router.use('/productos', productosRouter);
  router.use('/users', usersRouter);
  router.use('/categorias', categoriasRouter);
}

module.exports = routerApi;
