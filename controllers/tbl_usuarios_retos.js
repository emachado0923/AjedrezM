'use strict'

const UsuariosRetos = require('../models/tbl_usuarios_retos')

function getUsuariosRetos (req, res){
    let UsuariosRetosId = req.params.UsuariosRetosId

    UsuariosRetos.findById(UsuariosRetosId, (err, UsuariosRetos) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!UsuariosRetos) return res.status(404).send({message: `UsuariosRetos no encontrado`})

        res.status(200).send({ UsuariosRetos })
    })
}
function getUsuariosRetos (req, res){
    UsuariosRetos.find({}, (err, UsuariosRetos) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!UsuariosRetos) return res.status(404).send({message: `Los UsuariosRetos no existen`})

        res.send(200, { UsuariosRetos })
    })
}
function saveUsuariosRetos (req, res ){
    console.log('POST/api/tbl_usuarios_retos')
    console.log(req.body)
    
    let usuariosretos = new UsuariosRetos()
    usuariosretos.idRetos = req.body.idRetos
    usuariosretos.idUsuario = req.body.idUsuario
    usuariosretos.cumplio = req.body.cumplio
    
    
    usuariosretos.save((err, UsuariosRetosStored) => {
        if (err) res.status(500).send({message: `Error al guardar la UsuariosRetos en la base de datos: ${err}`})

        res.status(200).send({UsuariosRetos: UsuariosRetosStored})
    })
}
function updateUsuariosRetos (req, res){
    let UsuariosRetosId = req.params.UsuariosRetosId
    let update = req.body

    UsuariosRetos.findByIdAndUpdate(UsuariosRetosId, update, (err, UsuariosRetosUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el UsuariosRetos: ${err}`})

        res.status(200).send({ UsuariosRetos: UsuariosRetosUpdated })
    })
}
function deleteUsuariosRetos (req, res){
    let UsuariosRetosId = req.params.UsuariosRetosId

    UsuariosRetos.findById(UsuariosRetosId, (err, UsuariosRetos) =>{
        if (err) res.status(500).send({message: `Error al eliminar el UsuariosRetos: ${err}`})

        UsuariosRetos.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el UsuariosRetos: ${err}`})
            res.status(200).send({message: 'El UsuariosRetos se ha eliminado'})
        })
    })
}
module.exports = 
{
    getUsuariosRetos,
    getUsuariosRetos,
    saveUsuariosRetos,
    updateUsuariosRetos,
    deleteUsuariosRetos
}