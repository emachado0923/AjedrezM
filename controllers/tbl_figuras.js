'use strict'

const Figuras = require('../models/tbl_figuras')

function getFiguras (req, res){
    let FigurasId = req.params.FigurasId

    Figuras.findById(FigurasId, (err, Figuras) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Figuras) return res.status(404).send({message: `Figuras no encontrado`})

        res.status(200).send({ Figuras })
    })
}
function getFiguras (req, res){
    Figuras.find({}, (err, Figuras) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Figuras) return res.status(404).send({message: `Los Figuras no existen`})

        res.send(200, { Figuras })
    })
}

function saveFiguras (req, res ){
    console.log('POST/api/tbl_figuras')
    console.log(req.body)
    
    let figuras = new Figuras()
    figuras.id = req.body.id
    figuras.x = req.body.x
    figuras.y = req.body.y
    figuras.idUsuario = req.body.id
    figuras.idPartida=req.body.idPartida 

    figuras.save((err, FigurasStored) => {
        if (err) res.status(500).send({message: `Error al guardar las Figuras en la base de datos: ${err}`})

        res.status(200).send({Figuras: FigurasStored})
    })
}

function updateFiguras (req, res){
    let FigurasId = req.params.FigurasId
    let update = req.body

    Figuras.findByIdAndUpdate(FigurasId, update, (err, FigurasUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el Figuras: ${err}`})

        res.status(200).send({ Figuras: FigurasUpdated })
    })
}
function deleteFiguras (req, res){
    let FigurasId = req.params.FigurasId

    Figuras.findById(FigurasId, (err, Figuras) =>{
        if (err) res.status(500).send({message: `Error al eliminar el Figuras: ${err}`})

        Figuras.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el Figuras: ${err}`})
            res.status(200).send({message: 'El Figuras se ha eliminado'})
        })
    })
}
module.exports = 
{
    getFiguras,
    getFiguras,
    saveFiguras,
    deleteFiguras,
    updateFiguras
}