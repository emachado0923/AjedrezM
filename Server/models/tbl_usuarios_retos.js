

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const UsuariosRetosSchema = Schema({
    idRetos: Number,
    idUsuario : Number,
    cumplio : Number
  
})

module.exports = mongoose.model('tbl_usuarios_retos ', UsuariosRetosSchema)