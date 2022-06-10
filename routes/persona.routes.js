const personaCtrl = require('./../controllers/persona.controllers');
const express = require ('express');
const router = express.Router();

router.post('/', personaCtrl.createPersona);
router.get('/', personaCtrl.getPersonas);
router.get('/:id', personaCtrl.getPersona);

module.exports = router;