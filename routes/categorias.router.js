const express = require('express');

const router = express.Router();

router.get('/:categoriaId/productos/:productoId', (req, res) => {
  // const id = req.params.id;
  const { categoriaId, productoId } = req.params;
  res.json({
    categoriaId,
    productoId,
  });
});

module.exports = router;
