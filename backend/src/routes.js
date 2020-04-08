const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        backend: 'Projeto Ponto Eletrônico'
    })
})

/* 
  ONGS
*/
routes.get('/index');

module.exports = routes;