const { Schema, model } = require("mongoose");

const mensajeSchema = new Schema({
  asunto: String,
  mensaje: String,
  archivo: String, // _id de archivos
  from: String, // _id de usuario
  to: String, // _id de usuario
});

const Mensaje = model("Mensaje", mensajeSchema);

module.exports = Mensaje;
