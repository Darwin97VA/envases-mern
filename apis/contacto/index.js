const path = require("path");
const Router = require("express").Router;
const Usuario = require("../../models/Usuario");
const Archivo = require("../../models/Archivo");
const Mensaje = require("../../models/Mensaje");
const mailSender = require("../../emails/sender");

const router = Router();

/**
 * DTO {
 *  nombres,
 *  correo,
 *  telefono,
 *  asunto,
 *  mensaje
 * }
 */
router.post("/", async (req, res) => {
  try {
    const existeUsuario = await Usuario.findOne({ correo: req.body.correo });

    if (existeUsuario) {
      var usuario = existeUsuario;
    } else {
      var usuario = new Usuario(req.body);
      usuario = await usuario.save();
      console.log("se creó nuevo usuario");
    }

    const objMsg = {
      asunto: req.body.asunto,
      mensaje: req.body.mensaje,
      from: usuario.id,
    };

    if (req.files) {
      const file = req.files.archivo;
      const now = new Date().getTime();
      const ruta = `${now}__${file.name}`;
      var archivo = new Archivo({
        nombre: file.name,
        ruta,
        usuario: usuario.id,
      });
      archivo = await archivo.save();
      await file.mv(path.resolve(__dirname, "..", "..", "archivos", ruta));
      console.log("Archivo guardado satisfactoriamente.");

      var mensaje = new Mensaje({ ...objMsg, archivo: archivo.id });
    } else {
      var mensaje = new Mensaje(objMsg);
    }

    mensaje = await mensaje.save();

    usuario.chat.push(mensaje.id);

    await usuario.save();
    usuario = usuario.toObject();
    mensaje = mensaje.toObject();
    archivo = archivo.toObject();
    await mailSender({ usuario, mensaje, archivo });

    return res.json({ success: true });
  } catch (e) {
    console.error(e);
    return res.json({ error: e, success: false });
  }
});

module.exports = router;
