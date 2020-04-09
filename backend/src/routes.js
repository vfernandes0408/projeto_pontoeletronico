const express = require('express');
const routes = express.Router();

const { celebrate, Segments, Joi } = require('celebrate');

const Funcionario = require('./controller/Funcionario/index'),
  Token = require('./controller/Token/index')


routes.get('/', (request, response) => { return response.json({ backend: 'Projeto Ponto Eletrônico' }) })

/*
FUNCIONARIO
*/

routes.get('/funcionario', Token.validate, Funcionario.index)
routes.post('/funcionario', Funcionario.create)
routes.put('/funcionario/:id', Token.validate, Funcionario.update)
routes.delete('/funcionario/:id', Token.validate, Funcionario.delete)

/*
TOKEN
*/

routes.post('/token', Token.create)

module.exports = routes;