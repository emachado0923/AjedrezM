'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const LogrosSchema = Schema({
    id: Number,
    nombreLogro : String,
    descripcion : String,
    tipoJuego : String,
    modoJuego : String
})

module.exports = mongoose.model('tbl_logros', LogrosSchema)