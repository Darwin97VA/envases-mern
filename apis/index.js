const express = require("express");
const contacto = require("./contacto");

const Router = express.Router;

const router = Router();

router.use("/contacto", contacto);

module.exports = router;
