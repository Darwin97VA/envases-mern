const getHtml = ({
  nombres,
  correo,
  telefono,
  asunto,
  mensaje,
  archivo,
}) => /* html */ `
<table>
<thead>
  <tr>
    <th colspan="2">
      <h1 style="text-align: center;"> Nuevo Mensaje </h1>
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <strong>Nombres:</strong>
    </td>
    <td>
      <div>${nombres}</div>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Correo:</strong>
    </td>
    <td>
      <div>${correo}</div>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Telefono:</strong>
    </td>
    <td>
      <div>${telefono}</div>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Asunto:</strong>
    </td>
    <td>
      <div>${asunto}</div>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Mensaje:</strong>
    </td>
    <td>
      <div>${mensaje}</div>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Archivo adjunto:</strong>
    </td>
    <td>
      <div>${archivo || "Ninguno"}</div>
    </td>
  </tr>
</tbody>
</table>

`;

const getText = ({
  nombres,
  correo,
  telefono,
  asunto,
  mensaje,
  archivo,
}) => /* html */ `
Nuevo mensaje

Nombres: ${nombres}
Correo: ${correo}
Teléfono: ${telefono}
Asunto: ${asunto}
Mensaje: ${mensaje}
Archivo Adjunto: ${archivo}
`;

module.exports = {
  getHtml,
  getText,
};
