const libroCtrl = require('./../controllers/libro.controllers');
const express = require ('express');
const router = express.Router();

router.post('/', libroCtrl.createLibro);
router.get('/', libroCtrl.getLibros);
router.get('/destacados', libroCtrl.getLibrosDestacados);
router.get('/:id', libroCtrl.getLibro);
router.put('/:id', libroCtrl.editLibro);
router.delete('/:id', libroCtrl.deleteLibro);

module.exports = router;