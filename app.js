// Imports
const cors = require('cors');
const express = require('express');

const path = require('path');

require('dotenv').config();
require('ejs')
const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log(`Server on port http://localhost:${port}/api/`));