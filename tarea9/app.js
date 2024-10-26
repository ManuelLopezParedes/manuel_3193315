const express = require('express');
const path = require('path')
const app = express();
const port = 3009;
const router = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.get('/', (req, res) => {
    res.redirect('/inicio.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});