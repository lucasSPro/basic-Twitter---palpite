const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  const frase = 'Hello palpiteiro';
  return res.send(frase);
});

module.exports = routes;
