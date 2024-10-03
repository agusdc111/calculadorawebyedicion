const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const auth = require('http-auth');

const app = express();
const PORT = 5000;

// Crear un objeto de autenticación básica
const basic = auth.basic({
  realm: 'Editar',
  file: __dirname + '/usuarios.txt'
});

// Agregar middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Agregar middleware para servir archivos estáticos
app.use(express.static('.'));

// Ruta para obtener los productos
app.get('/products', (req, res) => {
  fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    res.json(JSON.parse(data));
  });
});

// Ruta para actualizar los productos
app.post('/products', (req, res) => {
  fs.writeFile('products.json', JSON.stringify(req.body, null, 2), (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Ruta para acceder a la página de edición
app.get('/editar', basic.check((req, res) => {
  res.sendFile(__dirname + '/editar.html');
}));

// Ruta para acceder a la página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
