const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const Funcionario = require('./controller/Funcionario/index')

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({
    backend: 'Projeto Ponto Eletrônico'
  })
})

routes.get('/funcionario', Funcionario.index)
routes.post('/funcionario', Funcionario.create)
routes.put('/funcionario/:id', Funcionario.update)
routes.delete('/funcionario/:id', Funcionario.delete)


module.exports = routes;