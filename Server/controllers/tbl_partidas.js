// tbl_partidas
'use strict'

const Partidas = require('../models/tbl_partidas')

function getPartidas (req, res){
    let PartidasId = req.params.PartidasId

    Partidas.findById(PartidasId, (err, Partidas) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Partidas) return res.status(404).send({message: `Partidas no encontrado`})

        res.status(200).send({ Partidas })
    })
}
function getPartidas (req, res){
    Partidas.find({}, (err, Partidas) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Partidas) return res.status(404).send({message: `Los Partidas no existen`})

        res.send(200, { Partidas })
    })
}
function savePartidas (req, res ){
    console.log('POST/api/tbl_partidas')
    console.log(req.body)
    
    let partidas = new Partidas()
    partidas.id = req.body.id
    partidas.tipoJuego = req.body.tipoJuego
    partidas.tipoJuego = req.body.tipoJuego
    partidas.modoJuego = req.body.modoJuego
    partidas.idUsuario = req.body.idUsuario
    partidas.puntos = req.body.puntos
    partidas.victoria = req.body.victoria
    partidas.tiempo = req.body.tiempo
    partidas.idPersonasNiveles = req.body.idPersonasNiveles

    partidas.save((err, PartidasStored) => {
        if (err) res.status(500).send({message: `Error al guardar la Partidas en la base de datos: ${err}`})

        res.status(200).send({Partidas: PartidasStored})
    })
}
function updatePartidas (req, res){
    let PartidasId = req.params.PartidasId
    let update = req.body

    Partidas.findByIdAndUpdate(PartidasId, update, (err, PartidasUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el Partidas: ${err}`})

        res.status(200).send({ Partidas: PartidasUpdated })
    })
}
function deletePartidas (req, res){
    let PartidasId = req.params.PartidasId

    Partidas.findById(PartidasId, (err, Partidas) =>{
        if (err) res.status(500).send({message: `Error al eliminar el Partidas: ${err}`})

        Partidas.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el Partidas: ${err}`})
            res.status(200).send({message: 'El Partidas se ha eliminado'})
        })
    })
}
module.exports = 
{
    getPartidas,
    getPartidas,
    savePartidas,
    updatePartidas,
    deletePartidas
}