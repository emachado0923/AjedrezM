'use strict'

const PersonasnivelesEducativo = require('../models/tbl_personas_nivelesEducativo')

function getPersonasnivelesEducativo (req, res){
    let PersonasnivelesEducativoId = req.params.PersonasnivelesEducativoId

    PersonasnivelesEducativo.findById(PersonasnivelesEducativoId, (err, PersonasnivelesEducativo) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!PersonasnivelesEducativo) return res.status(404).send({message: `PersonasnivelesEducativo no encontrado`})

        res.status(200).send({ PersonasnivelesEducativo })
    })
}
function getPersonasnivelesEducativo (req, res){
    PersonasnivelesEducativo.find({}, (err, PersonasnivelesEducativo) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!PersonasnivelesEducativo) return res.status(404).send({message: `Los PersonasnivelesEducativo no existen`})

        res.send(200, { PersonasnivelesEducativo })
    })
}
function savePersonasnivelesEducativo (req, res ){
    console.log('POST/api/tbl_personas_nivelesEducativo')
    console.log(req.body)
    
    let personasniveleseducativo = new PersonasnivelesEducativo()
    personasniveleseducativo.id = req.body.id
    personasniveleseducativo.idPersona = req.body.idPersona
    personasniveleseducativo.idNivelEducativo = req.body.idNivelEducativo
    
    personasniveleseducativo.save((err, PersonasnivelesEducativoStored) => {
        if (err) res.status(500).send({message: `Error al guardar la PersonasnivelesEducativo en la base de datos: ${err}`})

        res.status(200).send({PersonasnivelesEducativo: PersonasnivelesEducativoStored})
    })
}
function updatePersonasnivelesEducativo (req, res){
    let PersonasnivelesEducativoId = req.params.PersonasnivelesEducativoId
    let update = req.body

    PersonasnivelesEducativo.findByIdAndUpdate(PersonasnivelesEducativoId, update, (err, PersonasnivelesEducativoUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el PersonasnivelesEducativo: ${err}`})

        res.status(200).send({ PersonasnivelesEducativo: PersonasnivelesEducativoUpdated })
    })
}
function deletePersonasnivelesEducativo (req, res){
    let PersonasnivelesEducativoId = req.params.PersonasnivelesEducativoId

    PersonasnivelesEducativo.findById(PersonasnivelesEducativoId, (err, PersonasnivelesEducativo) =>{
        if (err) res.status(500).send({message: `Error al eliminar el PersonasnivelesEducativo: ${err}`})

        PersonasnivelesEducativo.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el PersonasnivelesEducativo: ${err}`})
            res.status(200).send({message: 'El PersonasnivelesEducativo se ha eliminado'})
        })
    })
}
module.exports = 
{
    getPersonasnivelesEducativo,
    getPersonasnivelesEducativo,
    savePersonasnivelesEducativo,
    updatePersonasnivelesEducativo,
    deletePersonasnivelesEducativo
}