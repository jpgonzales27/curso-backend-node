const express = require('express');

const router = express.Router();

//query params
router.get('/', (req, res) => {
  /*
    los query params son los valores que definimos en la url
    despues el sigo ?
    http://localhost:3000/users?limit=2&offset=3

    const limit = req.query.limit;
    const offset = req.query.offset;
  */
  const { limit, offset } = req.query;
  if (req.query) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay query params');
  }
});

module.exports = router;
