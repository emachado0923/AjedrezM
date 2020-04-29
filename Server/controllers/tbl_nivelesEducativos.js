'use strict'

const nivelesEducativos = require('../models/tbl_nivelesEducativos')

function getnivelesEducativos (req, res){
    let nivelesEducativosId = req.params.nivelesEducativosId

    nivelesEducativos.findById(nivelesEducativosId, (err, nivelesEducativos) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!nivelesEducativos) return res.status(404).send({message: `nivelesEducativos no encontrado`})

        res.status(200).send({ nivelesEducativos })
    })
}
function getnivelesEducativos (req, res){
    nivelesEducativos.find({}, (err, nivelesEducativos) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!nivelesEducativos) return res.status(404).send({message: `Los nivelesEducativos no existen`})

        res.send(200, { nivelesEducativos })
    })
}
function savenivelesEducativos (req, res ){
    console.log('POST/api/tbl_nivelesEducativos')
    console.log(req.body)
    
    let niveleseducativos = new nivelesEducativos()
    niveleseducativos.id = req.body.id
    niveleseducativos.nombre = req.body.nombre
    niveleseducativos.descripcion = req.body.descripcion
    niveleseducativos.imagen = req.body.imagen
    niveleseducativos.filas = req.body.filas
    niveleseducativos.columnas = req.body.columnas
    niveleseducativos.caballosFila = req.body.caballosFila
   


    niveleseducativos.save((err, nivelesEducativosStored) => {
        if (err) res.status(500).send({message: `Error al guardar la nivelesEducativos en la base de datos: ${err}`})

        res.status(200).send({nivelesEducativos: nivelesEducativosStored})
    })
}
function updatenivelesEducativos (req, res){
    let nivelesEducativosId = req.params.nivelesEducativosId
    let update = req.body

    nivelesEducativos.findByIdAndUpdate(nivelesEducativosId, update, (err, nivelesEducativosUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el nivelesEducativos: ${err}`})

        res.status(200).send({ nivelesEducativos: nivelesEducativosUpdated })
    })
}
function deletenivelesEducativos (req, res){
    let nivelesEducativosId = req.params.nivelesEducativosId

    nivelesEducativos.findById(nivelesEducativosId, (err, nivelesEducativos) =>{
        if (err) res.status(500).send({message: `Error al eliminar el nivelesEducativos: ${err}`})

        nivelesEducativos.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el nivelesEducativos: ${err}`})
            res.status(200).send({message: 'El nivelesEducativos se ha eliminado'})
        })
    })
}
module.exports = 
{
    getnivelesEducativos,
    getnivelesEducativos,
    savenivelesEducativos,
    updatenivelesEducativos,
    deletenivelesEducativos
}