const express = require('express');

const routes = express.Router();

const PalpiteController = require('./controllers/palpiteController');
const LikeController = require('./controllers/LikeController');

routes.get('/palpite', PalpiteController.index);
routes.post('/palpite', PalpiteController.store);

routes.post('/likes/:id', LikeController.store);

module.exports = routes;
