const express = require('express');
const cors =require('cors');
const app = express();
const morgan = require('morgan')

require('./database.js')
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(require('./routes/recetas.routes'))

module.exports = app;