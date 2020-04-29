'use strict'

const express = require('express')
const usuarioCtrl = require('../controllers/usuario')
const configuracionesCtrl = require('../controllers/tbl_configuraciones')
const figurasCtrl = require('../controllers/tbl_figuras')
const logrosCtrl = require('../controllers/tbl_logros')
const logrosusuariosCtrl = require('../controllers/tbl_logros_usuarios')
const niveleseducativosCtrl = require('../controllers/tbl_nivelesEducativos')
const partidasCtrl = require('../controllers/tbl_partidas')
const retosCtrl = require('../controllers/tbl_retos')
const usuariosretosCtrl = require('../controllers/tbl_usuarios_retos')

const api = express.Router()

// Usuario 
api.get('/usuario', usuarioCtrl.getUsuarios)
api.get('/usuario/:usuarioId', usuarioCtrl.getUsuario)
api.post('/usuario', usuarioCtrl.saveUsuario)
api.put('/usuario/:usuarioId',usuarioCtrl.updateUsuario)
api.delete('/usuario/:usuarioId', usuarioCtrl.deleteUsuario)

// Configuraciones 
api.get('/tbl_configuraciones', configuracionesCtrl.getConfiguraciones)
api.get('/tbl_configuraciones/:ConfiguracionesId',configuracionesCtrl.getConfiguraciones)
api.post('/tbl_configuraciones',configuracionesCtrl.saveConfiguraciones)
api.put('/tbl_configuraciones/:ConfiguracionesId',configuracionesCtrl.updateConfiguraciones)
api.delete('/tbl_configuraciones:ConfiguracionesId',configuracionesCtrl.deleteConfiguraciones)

// Figuras 
api.get('/tbl_figuras',figurasCtrl.getFiguras)
api.get('/tbl_figuras/:FigurasId',figurasCtrl.getFiguras)
api.post('/tbl_figuras',figurasCtrl.saveFiguras)
api.put('/tbl_figuras:FigurasId',figurasCtrl.updateFiguras)
api.delete('/tbl_figuras:FigurasId',figurasCtrl.deleteFiguras)

// Logros

api.get('/tbl_logros',logrosCtrl.getLogros)
api.get('/tbl_logros/:logrosId',logrosCtrl.getlogros)
api.post('/tbl_logros',logrosCtrl.savelogros)
api.put('/tbl_logros:logrosId',logrosCtrl.updatelogros)
api.delete('/tbl_logros:logrosId',logrosCtrl.deletelogros)

// Logros Usuarios 
api.get('/tbl_logros_usuarios',logrosusuariosCtrl.getLogrosUsuarios)
api.get('/tbl_logros_usuarios/:LogrosUsuariosId',logrosusuariosCtrl.getLogrosUsuarios)
api.post('/tbl_logros_usuarios',logrosusuariosCtrl.saveLogrosUsuarios)
api.put('/tbl_logros_usuarios:LogrosUsuariosId',logrosusuariosCtrl.updateLogrosUsuarios)
api.delete('/tbl_logros_usuarios:LogrosUsuariosId',logrosusuariosCtrl.deleteLogrosUsuarios)

// Niveles Educativos 
api.get('/tbl_nivelesEducativos',niveleseducativosCtrl.getnivelesEducativos)
api.get('/tbl_nivelesEducativos/:nivelesEducativosId',niveleseducativosCtrl.getnivelesEducativos)
api.post('/tbl_nivelesEducativos',niveleseducativosCtrl.savenivelesEducativos)
api.put('/tbl_nivelesEducativos:nivelesEducativosId',niveleseducativosCtrl.updatenivelesEducativos)
api.delete('/tbl_nivelesEducativos:nivelesEducativosId',niveleseducativosCtrl.deletenivelesEducativos)

// Partidas 
api.get('/tbl_partidas',partidasCtrl.getPartidas)
api.get('/tbl_partidas/:PartidasId',partidasCtrl.getPartidas)
api.post('/tbl_partidas',partidasCtrl.savePartidas)
api.put('/tbl_partidas:PartidasId',partidasCtrl.updatePartidas)
api.delete('/tbl_partidas:PartidasId',partidasCtrl.deletePartidas)

// Retos 
api.get('/tbl_retos',retosCtrl.getRetos)
api.get('/tbl_retos/:RetosId',retosCtrl.getRetos)
api.post('/tbl_retos',retosCtrl.saveRetos)
api.put('/tbl_retos:RetosId',retosCtrl.updateRetos)
api.delete('/tbl_retos:RetosId',retosCtrl.deleteRetos)

// Usuario Retos 
api.get('/tbl_usuarios_retos',usuariosretosCtrl.getUsuariosRetos)
api.get('/tbl_usuarios_retos/:RetosId',usuariosretosCtrl.getUsuariosRetos)
api.post('/tbl_usuarios_retos',usuariosretosCtrl.saveUsuariosRetos)
api.put('/tbl_usuarios_retos:RetosId',usuariosretosCtrl.updateUsuariosRetos)
api.delete('/tbl_usuarios_retos:RetosId',usuariosretosCtrl.deleteUsuariosRetos)

module.exports = api
