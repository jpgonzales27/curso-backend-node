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

router.get('/', async (req, res) => {
  const productos = await service.find();
  res.json(productos);
});

/*
  todas las rutas especificas deben ir antes que las rutas dimanmicas :id
*/
router.get('/filter', (req, res) => {
  res.send('Yo soy filter');
});

router.get('/:id', async (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const producto = await service.findOne(id);
  res.json(producto);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProducto = await service.create(body);
  res.status(201).json(newProducto);
});

/*
  podria ser PUT pero este actualiza todo el obejto
  PATCH solo actualiza los campos que le enviamos
*/
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const producto = await service.update(id, body);
    res.json(producto);
  } catch (error) {
    /*
      capturamos el error que estamos lanzando desde el metodo update
      en nuestro ServiceWorkerRegistration
    */
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
});

module.exports = router;
