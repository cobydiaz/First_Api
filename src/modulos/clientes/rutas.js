const express = require('express')

const router = express.Router();

const respuesta = require('../../red/respuestas')
const controlador = require('./controlador')

router.get('/', function(req,res) {
    controlador.getAll()
    .then((data) => {
        respuesta.success(req, res, data, 200)
    })
})

module.exports = router;