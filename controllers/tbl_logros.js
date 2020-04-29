'use strict'

const Logros = require('../models/tbl_logros')

function getLogros (req, res){
    let LogrosId = req.params.LogrosId

    Logros.findById(LogrosId, (err, Logros) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Logros) return res.status(404).send({message: `Logros no encontrado`})

        res.status(200).send({ Logros })
    })
}
function getLogros (req, res){
    Logros.find({}, (err, Logros) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Logros) return res.status(404).send({message: `Los Logros no existen`})

        res.send(200, { Logros })
    })
}
function saveLogros (req, res ){
    console.log('POST/api/tbl_logros')
    console.log(req.body)
    
    let logros = new Logros()
    logros.id = req.body.id
    logros.nombreLogro = req.body.nombreLogro
    logros.descripcion = req.body.descripcion
    logros.tipoJuego = req.body.tipoJuego
    logros.modoJuego = req.body.modoJuego

    logros.save((err, LogrosStored) => {
        if (err) res.status(500).send({message: `Error al guardar la Logros en la base de datos: ${err}`})

        res.status(200).send({Logros: LogrosStored})
    })
}
function updateLogros (req, res){
    let LogrosId = req.params.LogrosId
    let update = req.body

    Logros.findByIdAndUpdate(LogrosId, update, (err, LogrosUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el Logros: ${err}`})

        res.status(200).send({ Logros: LogrosUpdated })
    })
}
function deleteLogros (req, res){
    let LogrosId = req.params.LogrosId

    Logros.findById(LogrosId, (err, Logros) =>{
        if (err) res.status(500).send({message: `Error al eliminar el Logros: ${err}`})

        Logros.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el Logros: ${err}`})
            res.status(200).send({message: 'El Logros se ha eliminado'})
        })
    })
}
module.exports = 
{
    getLogros,
    getLogros,
    saveLogros,
    updateLogros,
    deleteLogros
}