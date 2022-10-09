const productosRouter = require('./productos.router');
const usersRouter = require('./users.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app) {
  app.use('/productos', productosRouter);
  app.use('/users', usersRouter);
  app.use('/categorias', categoriasRouter);
}

module.exports = routerApi;
