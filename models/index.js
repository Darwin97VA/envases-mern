const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa con la base de datos");
  })
  .catch((e) => {
    console.log("Hubo un error al conectarse a la base de datos");
    console.error(e);
  });
