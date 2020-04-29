'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const FigurasSchema = Schema({
    id: Number,
    x: Number,
    y: Number,
    idUsuario : Number,
    idPartida :Number
})

module.exports = mongoose.model('tbl_figuras', FigurasSchema)