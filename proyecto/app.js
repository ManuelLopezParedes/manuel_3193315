const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();

// Configuración para el uso de peticiones POST
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

// Plantillas dinámicas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Crear la conexión
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '', // tu contraseña de MySQL
    database: 'proyecto',
    port: 3306
});

// Comprobación de la conexión de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

// Iniciar el servidor
const port = 3009;
app.listen(port, () => {
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

// Ruta principal
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Agregar usuarios
app.post('/add', (req, res) => {
    const { num_cuenta, nombre, apellido_P, apellido_M, carrera, correo, telefono, semestre } = req.body;
    const query = 'INSERT INTO users (num_cuenta, nombre, apellido_P, apellido_M, carrera, correo, telefono, semestre) VALUES (?, ?, ?, ? ,? ,?, ?, ?)';
    db.query(query, [num_cuenta, nombre, apellido_P, apellido_M, carrera, correo, telefono, semestre], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Editar usuario
app.get('/edit/:num_cuenta', (req, res) => {
    const { num_cuenta } = req.params;
    const query = 'SELECT * FROM users WHERE num_cuenta = ?';
    db.query(query, [num_cuenta], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});


// Editar usuario - Ruta POST para guardar los cambios
app.post('/edit/:num_cuenta', (req, res) => {
    const { num_cuenta } = req.params;
    const {nombre, apellido_P, apellido_M, carrera, correo, telefono, semestre} = req.body;
    const query = 'UPDATE users SET nombre= ?, apellido_P = ?, apellido_M = ?, carrera = ?, correo = ?, telefono = ?, semestre = ?  WHERE num_cuenta = ?';
    db.query(query, [nombre, apellido_P, apellido_M, carrera, correo, telefono, semestre, num_cuenta], (err) => {
        if (err) {
            console.error('Error updating user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Eliminar usuario
app.get('/delete/:num_cuenta', (req, res) => {
    const { num_cuenta } = req.params;
    const query = 'DELETE FROM users WHERE num_cuenta = ?';
    db.query(query, [num_cuenta], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});
