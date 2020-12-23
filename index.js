require("dotenv").config();
require("./models");
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const apis = require("./apis");
const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors());

app.use(express.static(path.resolve(__dirname, "public", "build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use("/api", apis);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Running in ${PORT} port.`));
