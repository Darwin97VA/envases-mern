const { Schema, model } = require("mongoose");

const archivoSchema = new Schema({
  nombre: String,
  ruta: String,
  usuario: String,
});

const Archivo = model("Archivo", archivoSchema);

module.exports = Archivo;
