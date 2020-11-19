const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

app.use(require('./controladorReservas'));

mongoose.connect('mongodb://localhost:27017/dbreservas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .once('open', () => console.log("Conexión a DB ok!!"))
    .once('error', (error) => console.log(error));

app.listen(3000, () => {
    console.log("¡Servidor Encendido! * Puerto de conexión 3000 *")
});