const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonaSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    nro_documento: {type: String, required: true},
    email: {type: String, required: true},
})

module.exports = mongoose.models.Persona || mongoose.model('Persona', PersonaSchema);