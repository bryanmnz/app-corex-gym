const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es requerido'] },
    email: { type: String, required: [true, 'El correo es requerido'], unique: true },
    password: { type: String, required: [true, 'La contrasena es requerido'] },
    image: { type: String, required: [false, 'La imagen no es obligatoria'] },
    role: { type: String, required: [true, 'El rol es requerido'], default: 'USER_ROLE', enum: { values: ['ADMIN_ROLE', 'USER_ROLE'], message: '{VALUE} No es un rol valido' } },
    state: { type: Boolean, default: false },
    google: { type: Boolean, default: false },
});

usuarioSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    //delete userObject.password;
    return userObject;
};

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} Debe de ser unico' });

module.exports = mongoose.model('user', usuarioSchema);