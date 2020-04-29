'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const LogrosUsuariosSchema = Schema({
    idLogro: Number,
    idUsuario : Number
    
})

module.exports = mongoose.model('tbl_logros_usuarios', LogrosUsuariosSchema)