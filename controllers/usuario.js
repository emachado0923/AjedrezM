'use strict'

const Usuario = require('../models/usuario')

function getUsuario (req, res){
    let usuarioId = req.params.usuarioId

    Usuario.findById(usuarioId, (err, usuario) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!usuario) return res.status(404).send({message: `Usuario no encontrado`})

        res.status(200).send({ usuario })
    })
}

function getUsuarios (req, res){
    Usuario.find({}, (err, usuarios) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!usuarios) return res.status(404).send({message: `Los usuarios no existen`})

        res.send(200, { usuarios })
    })
}

function saveUsuario (req, res ){
    console.log('POST /api/usuario')
    console.log(req.body)

    let usuario = new Usuario()
    usuario.id = req.body.id
    usuario.name= req.body.name
    usuario.email = req.body.email
    usuario.user = req.body.user
    usuario.password = req.body.password
    usuario.codigo = req.body.codigo
    usuario.idPersona = req.body.idPersona

    usuario.save((err, usuarioStored) => {
        if (err) res.status(500).send({message: `Error al guardar el usuario en la base de datos: ${err}`})

        res.status(200).send({usuario: usuarioStored})
    })
}

function updateUsuario (req, res){
    let usuarioId = req.params.usuarioId
    let update = req.body

    Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})

        res.status(200).send({ usuario: usuarioUpdated })
    })
}

function deleteUsuario (req, res){
    let usuarioId = req.params.usuarioId

    Usuario.findById(usuarioId, (err, usuario) =>{
        if (err) res.status(500).send({message: `Error al eliminar el usuario: ${err}`})

        usuario.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el usuario: ${err}`})
            res.status(200).send({message: 'El usuario se ha eliminado'})
        })
    })
}

module.exports = {
    getUsuario,
    getUsuarios,
    saveUsuario,
    updateUsuario,
    deleteUsuario
}