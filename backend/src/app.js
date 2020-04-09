const express = require('express'),
    routes = require('./routes'),
    cors = require('cors'),
    { errors } = require('celebrate'),
    compression = require('compression')
const app = express();

app.use(compression({ level: 9 }), cors(),
    express.json())

app.use(routes)
app.use(errors());
module.exports = app;