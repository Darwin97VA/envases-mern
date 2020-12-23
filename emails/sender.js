const path = require("path");
const { createTransport } = require("nodemailer");
const { getText, getHtml } = require("./parser");

const {
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_HOST,
  SMTP_PORT,

  MAIL_NAME,
  EMAIL_RECEIVER,
} = process.env;

const transporter = createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});
console.log(EMAIL_RECEIVER);
const sender = ({ usuario, mensaje, archivo }) => {
  const data = { ...usuario, ...mensaje, archivo: archivo.nombre };
  console.log(data);
  const mailOptions = {
    from: `"${MAIL_NAME}" <${SMTP_USER}>`,
    to: EMAIL_RECEIVER,
    subject: "Nuevo Mensaje",
    text: getText(data),
    html: getHtml(data),
    attachments: [
      {
        filename: archivo.nombre,
        path: path.resolve(__dirname, "..", "archivos", archivo.ruta),
      },
    ],
  };
  return transporter.sendMail(mailOptions);
};

module.exports = sender;
