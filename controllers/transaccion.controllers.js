const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.createTransaccion = async(req, res)=>{
    var transaccion = new Transaccion(req.body);
    try{
        await transaccion.save();
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

transaccionCtrl.getTransacciones = async(req, res)=>{
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesCliente = async(req, res)=>{
    //var filtro = {'emailCliente': req.params.emailCliente};
    criteria = {};
        if(req.query.emailCliente!=null && req.query.emailCliente!=""){
            criteria.emailCliente = { $regex: req.query.emailCliente, $options: "i" }};

    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesDivisas = async(req, res)=>{
    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}

transaccionCtrl.getTransaccion = async(req, res)=>{
    const transaccion = await Transaccion.find({});
    res.json(transaccion);
}

transaccionCtrl.editTransaccion = async(req, res)=>{
    const oldTransaccion = new Transaccion(req.body);
    try{
        await Transaccion.updateOne({_id: req.body._id}, oldTransaccion);
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

transaccionCtrl.deleteTransaccion = async(req, res)=>{
    try{
        await Transaccion.deleteOne({_id: req.params.id});
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

module.exports = transaccionCtrl;