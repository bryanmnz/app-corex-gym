const mongoose = require('mongoose');
const config = require('../config/general.config');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let trainerSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es requerido'] },
    lastname: { type: String, required: [true, 'El apellido es requerido'] },
    email: { type: String, required: [true, 'El correo es requerido'], unique: true },
    password: { type: String, required: [true, 'La contrasena es requerido'] },
    image: { type: String, required: [false, 'La imagen no es obligatoria'] },
    role: { type: String, required: [true, 'El rol es requerido'], default: 'USER_ROLE', enum: { values: config.APP_ROLE , message: '{VALUE} No es un rol valido' } },
    state: { type: Boolean, default: false },
    city: { type: String, required: [true, 'La ciudad es requerida'] },
    locality: { type: String, required: [true, 'La localidad es requerida'] },
    address:  { type: String, required: [true, 'La direccion es requerida'] },
    location: { type: String, required: [true, 'La ubicacion es requerida'] },
    rate: { type: Number, default: 0 },
    areas: { type: Array, required:false}
    
    
});

trainerSchema.methods.toJSON = function () {
    let trainer = this;
    let trainerObject = trainer.toObject();
    delete trainerObject.password;
    return trainerObject;
};

trainerSchema.plugin(uniqueValidator, { message: '{PATH} Debe de ser unico' });

module.exports = mongoose.model('trainer', trainerSchema);