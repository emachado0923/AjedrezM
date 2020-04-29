
   
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const nivelesEducativosSchema = Schema({
    id: Number,
    nombre : String,
    descripcion: String,
    imagen : String,
    filas : Number,
    columnas: Number,
    caballosFila: Number
})

module.exports = mongoose.model('tbl_nivelesEducativos', nivelesEducativosSchema)