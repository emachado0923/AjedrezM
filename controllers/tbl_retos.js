'use strict'

const Retos = require('../models/tbl_retos')

function getRetos (req, res){
    let RetosId = req.params.RetosId

    Retos.findById(RetosId, (err, Retos) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Retos) return res.status(404).send({message: `Retos no encontrado`})

        res.status(200).send({ Retos })
    })
}
function getRetos (req, res){
    Retos.find({}, (err, Retos) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Retos) return res.status(404).send({message: `Los Retos no existen`})

        res.send(200, { Retos })
    })
}
function saveRetos (req, res ){
    console.log('POST/api/tbl_retos')
    console.log(req.body)
    
    let Retos = new Retos()
    Retos.id = req.body.id
    Retos.nombreReto = req.body.nombreReto
    Retos.descripcion = req.body.descripcion
    
    Retos.save((err, RetosStored) => {
        if (err) res.status(500).send({message: `Error al guardar la Retos en la base de datos: ${err}`})

        res.status(200).send({Retos: RetosStored})
    })
}
function updateRetos (req, res){
    let RetosId = req.params.RetosId
    let update = req.body

    Retos.findByIdAndUpdate(RetosId, update, (err, RetosUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el Retos: ${err}`})

        res.status(200).send({ Retos: RetosUpdated })
    })
}
function deleteRetos (req, res){
    let RetosId = req.params.RetosId

    Retos.findById(RetosId, (err, Retos) =>{
        if (err) res.status(500).send({message: `Error al eliminar el Retos: ${err}`})

        Retos.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el Retos: ${err}`})
            res.status(200).send({message: 'El Retos se ha eliminado'})
        })
    })
}
module.exports = 
{
    getRetos,
    getRetos,
    saveRetos,
    updateRetos,
    deleteRetos
}