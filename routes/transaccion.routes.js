const transaccionCtrl = require('./../controllers/transaccion.controllers');
const express = require ('express');
const router = express.Router();

router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
//router.get('/email/:emailCliente', transaccionCtrl.getTransaccionesCliente);
router.get('/filtro', transaccionCtrl.getTransaccionesCliente);
//router.get('/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesDivisas);
router.get('/:id', transaccionCtrl.getTransaccion);
router.put('/:id', transaccionCtrl.editTransaccion);
router.delete('/:id', transaccionCtrl.deleteTransaccion);

module.exports = router;