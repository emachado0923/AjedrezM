'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const UsuarioSchema = Schema({
    id: Number,
    nombre: 
    {
        type : String,
    },
    email: String,
    user: String,
    password: {type: String, select: false},
    codigo: String,
    idPersona: Number,
    disability: { type: String, enum: ['yes', 'no'] },
    genero: { type: String, enum: ['man', 'woman'] },
    foto: String

})

module.exports = mongoose.model('Usuario', UsuarioSchema)