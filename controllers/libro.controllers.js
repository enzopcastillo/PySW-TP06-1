const Libro = require('../models/libro');
const libroCtrl = {};

libroCtrl.createLibro = async(req, res)=>{
    var libro = new Libro(req.body);
    try{
        await libro.save();
        res.json({
            'status': '1',
            'msg': 'Se ha creado exitosamente.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error creando.'
        })
    }
}

libroCtrl.getLibros = async(req, res)=>{
    var libros = await Libro.find();
    res.json(libros);
}

libroCtrl.getLibrosDestacados = async(req, res)=>{
    var criteria = {'destacado': true};
    var libros = await Libro.find(criteria);
    res.json(libros);
}

libroCtrl.getLibro = async(req, res)=>{
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
}

libroCtrl.editLibro = async(req, res)=>{
    const oldLibro = new Libro(req.body);
    try{
        await Libro.updateOne({_id: req.body._id}, oldLibro);
        res.json({
            'status': '1',
            'msg': 'Se ha editado correctamente.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error editando.'
        })
    }
}

libroCtrl.deleteLibro = async(req, res)=>{
    try{
        await Libro.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Se ha eliminado exitosamente.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error eliminando.'
        })
    }
}

module.exports = libroCtrl;