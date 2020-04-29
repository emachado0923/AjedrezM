'use strict'

const LogrosUsuarios = require('../models/tbl_logros')

function getLogrosUsuarios (req, res){
    let LogrosUsuariosId = req.params.LogrosUsuariosId

    LogrosUsuarios.findById(LogrosUsuariosId, (err, LogrosUsuarios) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!LogrosUsuarios) return res.status(404).send({message: `LogrosUsuarios no encontrado`})

        res.status(200).send({ LogrosUsuarios })
    })
}
function getLogrosUsuarios (req, res){
    LogrosUsuarios.find({}, (err, LogrosUsuarios) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!LogrosUsuarios) return res.status(404).send({message: `Los LogrosUsuarios no existen`})

        res.send(200, { LogrosUsuarios })
    })
}

function saveLogrosUsuarios (req, res ){
    console.log('POST/api/tbl_logros_usuarios')
    console.log(req.body)
    
    let logrosusuarios = new LogrosUsuarios()
    logrosusuarios.idLogro = req.body.idLogro
    logrosusuarios.idUsuario =req.body.idUsuario
    

    logrosusuarios.save((err, LogrosUsuariosStored) => {
        if (err) res.status(500).send({message: `Error al guardar la LogrosUsuarios en la base de datos: ${err}`})

        res.status(200).send({LogrosUsuarios: LogrosUsuariosStored})
    })
}
function updateLogrosUsuarios (req, res){
    let LogrosUsuariosId = req.params.LogrosUsuariosId
    let update = req.body

    LogrosUsuarios.findByIdAndUpdate(LogrosUsuariosId, update, (err, LogrosUsuariosUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el LogrosUsuarios: ${err}`})

        res.status(200).send({ LogrosUsuarios: LogrosUsuariosUpdated })
    })
}
function deleteLogrosUsuarios (req, res){
    let LogrosUsuariosId = req.params.LogrosUsuariosId

    LogrosUsuarios.findById(LogrosUsuariosId, (err, LogrosUsuarios) =>{
        if (err) res.status(500).send({message: `Error al eliminar el LogrosUsuarios: ${err}`})

        LogrosUsuarios.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el LogrosUsuarios: ${err}`})
            res.status(200).send({message: 'El LogrosUsuarios se ha eliminado'})
        })
    })
}
module.exports = 
{
    getLogrosUsuarios,
    getLogrosUsuarios,
    saveLogrosUsuarios,
    updateLogrosUsuarios,
    deleteLogrosUsuarios
}