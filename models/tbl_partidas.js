
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const partidasSchema = Schema({
    id: Number,
    tipoJuego : String,
    modoJuego : String,
    idUsuario : Number,
    puntos : Number,
    victoria : Number,
    tiempo : String,
    idPersonasNiveles : Number
  
})

module.exports = mongoose.model('tbl_partidas', partidasSchema)