const express = require('express');

const routes = express.Router();

const PalpiteController = require('./controllers/palpiteController');

routes.get('/palpite', PalpiteController.index);
routes.post('/palpite', PalpiteController.store);

module.exports = routes;
