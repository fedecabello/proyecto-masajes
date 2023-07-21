const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Ruta para guardar los datos en un archivo de texto.
app.post('/guardar_datos', (req, res) => {
  const datos = req.body;

  // Ruta y nombre del archivo de texto donde se guardarán los datos.
  const filePath = './datos_reservas.txt';

  // Guardar los datos en el archivo de texto.
  fs.appendFile(filePath, datos, (err) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      res.status(500).json({ message: 'Error al guardar los datos.' });
    } else {
      console.log('Datos guardados correctamente en el archivo de texto.');
      res.json({ message: 'Datos guardados correctamente.' });
    }
  });
});

// Iniciar el servidor.
app.listen(port, () => {
  console.log(`Servidor backend iniciado en http://localhost:${port}`);
});