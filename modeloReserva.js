const mongoose = require('mongoose');

let esquemaReserva = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: [true, 'Nombre es un dato obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'Apellido es un dato obligatorio']
    },
    telefono: {
        type: Number,
        required: [true, 'Telefono es un dato obligatorio']
    },
    fechaInicioReserva: {
        type: String,
        required: [true, 'Fecha de Inicio de Reserva es un dato obligatorio']
    },
    fechaFinReserva: {
        type: String,
        required: [true, 'Fecha de Fin de Reserva es un dato obligatorio']
    },
    numeroPersonas: {
        type: Number,
        required: [true, 'Cantidad de Personas es un dato obligatorio']
    },
    tipoReserva: {
        type: String,
        required: [true, 'Tipo de Reserva es un dato obligatorio']
    },

});

module.exports = mongoose.model('modeloReserva', esquemaReserva);