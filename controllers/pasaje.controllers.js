const Pasaje = require('../models/pasaje');
const pasajeCtrl = {};

pasajeCtrl.createPasaje = async(req, res)=>{
    var pasaje = new Pasaje(req.body);
    try{
        await pasaje.save();
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

pasajeCtrl.getPasajes = async(req, res)=>{
    var pasajes = await Pasaje.find().populate('pasajero');
    res.json(pasajes);
}

pasajeCtrl.getPasajesAdultos = async(req, res)=>{
    var categoria = {'categoriaPasajero': 'a', 'categoriaPasajero': 'adulto'};
    var pasajes = await Pasaje.find(categoria);
    res.json(pasajes);
}

pasajeCtrl.getPasajesJubilados = async(req, res)=>{
    var categoria = {'categoriaPasajero': 'j', 'categoriaPasajero': 'jubilado'};
    var pasajes = await Pasaje.find(categoria);
    res.json(pasajes);
}

pasajeCtrl.getPasajesMenores = async(req, res)=>{
    var categoria = {'categoriaPasajero': 'm', 'categoriaPasajero': 'menor'};
    var pasajes = await Pasaje.find(categoria);
    res.json(pasajes);
}

pasajeCtrl.editPasaje = async(req, res)=>{
    const oldPasaje = new Pasaje(req.body);
    try{
        await Pasaje.updateOne({_id: req.body._id}, oldPasaje);
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

pasajeCtrl.deletePasaje = async(req, res)=>{
    try{
        await Pasaje.deleteOne({_id: req.params.id});
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

module.exports = pasajeCtrl;