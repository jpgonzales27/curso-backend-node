const express = require('express');
const ProductoService = require('../services/producto.service');

const router = express.Router();

/*
  Creamos una instancia de nuestro servicio para poder acceder
  a los metodos del mismoy al haber usado Faker en el constructor
  solo tendremos generados una ves los datos miestra nuestra app
  no le demos reload
*/
const service = new ProductoService();

router.get('/', (req, res) => {
  const productos = service.find();
  res.json(productos);
});

/*
  todas las rutas especificas deben ir antes que las rutas dimanmicas :id
*/
router.get('/filter', (req, res) => {
  res.send('Yo soy filter');
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const producto = service.findOne(id);
  res.json(producto);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProducto = service.create(body);
  res.status(201).json(newProducto);
});

/*
  podria ser PUT pero este actualiza todo el obejto
  PATCH solo actualiza los campos que le enviamos
*/
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const producto = service.update(id, body);
  res.json(producto);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const respuesta = service.delete(id);
  res.json(respuesta);
});

module.exports = router;
