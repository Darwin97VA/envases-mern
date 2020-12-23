const { Schema, model } = require("mongoose");

const usuarioSchema = new Schema({
  nombres: String,
  correo: {
    type: String,
    lowercase: true,
    trim: true,
  },
  telefono: String,
  chat: [String], // _ids de mensajes
});

const Usuario = model("Usuario", usuarioSchema);

module.exports = Usuario;
