'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const ConfiguracionesSchema = Schema({
    id: Number,
    fondo1: String,
    fondo2: String,
    tablero1 : String,
    tablero2 : String,
    idioma : String,
    caballos : String,
    sonido : String,
    idusuario: Number
})

module.exports = mongoose.model('tbl_configuraciones', ConfiguracionesSchema)