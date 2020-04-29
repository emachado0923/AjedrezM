
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const RetosSchema = Schema({
    id: Number,
    nombreReto : String,
    descripcion : String
  
})

module.exports = mongoose.model('tbl_retos ', RetosSchema)