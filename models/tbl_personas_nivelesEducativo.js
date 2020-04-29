
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const bcrypt = require('bcrypt-node')

const PersonasnivelesEducativoSchema = Schema({
    id: Number,
    idPersona :Number,
    idNivelEducativo : Number
  
})

module.exports = mongoose.model('tbl_personas_nivelesEducativo', PersonasnivelesEducativoSchema)