const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const ReservaModelo = require('./modeloReserva');

const underScore = require('underscore');

app.post('/reservas', function (peticion, respuesta) {
    
    let datos = peticion.body;

    let reservaGuardar = new ReservaModelo({

        nombre: datos.nombre,
        apellido: datos.apellido,
        telefono: datos.telefono,
        fechaInicioReserva: datos.fechaInicioReserva,
        fechaFinReserva: datos.fechaFinReserva,
        numeroPersonas: datos.numeroPersonas,
        tipoReserva: datos.tipoReserva

    });

    reservaGuardar.save((err,resultado)=>{

        if (err) {
            respuesta.status(400).json({
                mensaje: err,
                estado: false
            })
        } else {
            respuesta.json({
                mensaje: '¡Reserva Exitosa!'
            })
        }

    });
    
});

app.put('/reservas/:id', function (peticion, respuesta) {

    let datos = peticion.body;
    let identificador = peticion.params.id;

    let datosActualizar = underScore.pick(datos, ["fechaInicioReserva","fechaFinReserva"]);

    ReservaModelo.findByIdAndUpdate(identificador,datosActualizar,(err, resultado) => {

        if (err) {
            respuesta.status(400).json({
                ok: false,
                mensaje: err,
                error:400
            })
        } else {
            respuesta.json({
                ok: true,
                mensaje: '¡Reserva Editada!'
            })
        }
    });

});

app.get('/reservas/:id', function (peticion, respuesta){

    let identificador = peticion.params.id;
    ReservaModelo.findById(identificador, (err, resultado) => {

        if (err) {
            respuesta.status(400).json({
                ok: false,
                mensaje: err,
                error: 400
            })
        } else {
            respuesta. json({
                ok: true,
                resultado: resultado
            })
        }
    });
});

app.delete('/reservas/:id', function (peticion, respuesta){

    let identificador = peticion.params.id;
    ReservaModelo.findByIdAndRemove(identificador, (err, resultado) => {

        if (err) {
            respuesta.status(400).json({
                ok: false,
                mensaje: err,
                error: 400
            })
        } else {
            respuesta. json({
                ok: true,
                mensaje: "Reserva Eliminada"
            })
        }
    });
});

module.exports = app;