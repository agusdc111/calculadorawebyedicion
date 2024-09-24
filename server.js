const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Cambié el puerto a 5000 para coincidir con tu configuración inicial

app.use(bodyParser.json());
app.use(express.static('.')); // Servir archivos estáticos

// Leer el archivo JSON
app.get('/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(JSON.parse(data));
    });
});

// Actualizar el archivo JSON
app.post('/products', (req, res) => {
    fs.writeFile('products.json', JSON.stringify(req.body, null, 2), (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(200);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/editar', (req, res) => {
    res.sendFile(__dirname + '/editar.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
