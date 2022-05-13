const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const routes = require('./routes.js')

routes(app)

app.listen(3000, () => console.log('Servidor de pé: http://localhost:3000'))

module.exports = app