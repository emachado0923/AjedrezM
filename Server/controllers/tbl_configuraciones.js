'use strict'

const Configuraciones = require('../models/tbl_configuraciones')

function getConfiguraciones (req, res){
    let ConfiguracionesId = req.params.ConfiguracionesId

    Configuraciones.findById(ConfiguracionesId, (err, Configuraciones) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Configuraciones) return res.status(404).send({message: `Configuraciones no encontrado`})

        res.status(200).send({ Configuraciones })
    })
}

function getConfiguraciones (req, res){
    Configuraciones.find({}, (err, Configuraciones) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!Configuraciones) return res.status(404).send({message: `Los Configuraciones no existen`})

        res.send(200, { Configuraciones })
    })
}


function saveConfiguraciones (req, res ){
    console.log('POST/api/tbl_configuraciones')
    console.log(req.body)
    
    let configuraciones = new Configuraciones()
    configuraciones.id = req.body.id
    configuraciones.fondo1 = req.body.fondo1
    configuraciones.fondo2 = req.body.fondo2
    configuraciones.tablero1 = req.body.tablero1
    configuraciones.tablero2 = req.body.tablero2
    configuraciones.idioma = req.body.idioma
    configuraciones.caballos = req.body.caballos
    configuraciones.sonidos = req.body.sonidos
    configuraciones.idusuario = req.body.idusuario

    configuraciones.save((err, ConfiguracionesStored) => {
        if (err) res.status(500).send({message: `Error al guardar la Configuraciones en la base de datos: ${err}`})

        res.status(200).send({Configuraciones: ConfiguracionesStored})
    })
}
function updateConfiguraciones (req, res){
    let ConfiguracionesId = req.params.ConfiguracionesId
    let update = req.body

    Configuraciones.findByIdAndUpdate(ConfiguracionesId, update, (err, ConfiguracionesUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el Configuraciones: ${err}`})

        res.status(200).send({ Configuraciones: ConfiguracionesUpdated })
    })
}
function deleteConfiguraciones (req, res){
    let ConfiguracionesId = req.params.ConfiguracionesId

    Configuraciones.findById(ConfiguracionesId, (err, Configuraciones) =>{
        if (err) res.status(500).send({message: `Error al eliminar el Configuraciones: ${err}`})

        Configuraciones.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el Configuraciones: ${err}`})
            res.status(200).send({message: 'El Configuraciones se ha eliminado'})
        })
    })
}

module.exports = 
{
    getConfiguraciones,
    getConfiguraciones,
    saveConfiguraciones,
    updateConfiguraciones,
    deleteConfiguraciones
}


