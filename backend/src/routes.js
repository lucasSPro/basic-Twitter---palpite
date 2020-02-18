const express = require('express');

const routes = express.Router();

const PalpiteController = require('./controllers/palpiteController');
const LikeController = require('./controllers/LikeController');
const RepalpiteController = require('./controllers/RepalpiteController');

routes.get('/palpite', PalpiteController.index);
routes.post('/palpite', PalpiteController.store);

routes.post('/likes/:id', LikeController.store);
routes.post('/repalpite/:id', RepalpiteController.store);

module.exports = routes;
