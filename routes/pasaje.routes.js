const pasajeCtrl = require('./../controllers/pasaje.controllers');
const express = require ('express');
const router = express.Router();

router.post('/', pasajeCtrl.createPasaje);
router.get('/', pasajeCtrl.getPasajes);
router.get('/adultos', pasajeCtrl.getPasajesAdultos);
router.get('/jubilados', pasajeCtrl.getPasajesJubilados);
router.get('/menores', pasajeCtrl.getPasajesMenores);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);

module.exports = router;