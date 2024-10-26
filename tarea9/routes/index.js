const express = require('express'); //Importa Express para usarlo en la creación del Router.
const path = require('path'); //Importa el módulo Path para trabajar con rutas de archivos de forma segura, independientemente del sistema operativo.
const router = express.Router(); //Aquí creamos una instancia de un Router. Un Router es
// un mini-aplicativo de Express que puede gestionar rutas separadas. Luego,
// este router lo vamos a conectar a la aplicación principal en app.js.

//Definición de las rutas:
router.get('/page1', (req, res) => {res.sendFile(path.join(__dirname, '../public', 'inicio.html'));}) // Define una ruta GET para page1. Cuando el usuario accede a http://localhost:3000/page1, esta ruta envía el archivo page1.html como respuesta.
router.get('/page2', (req, res) => {res.sendFile(path.join(__dirname, '../public', 'formulario.html'));}) //Hace lo mismo para la página 2.
router.get('/page3', (req, res) => {res.sendFile(path.join(__dirname, '../public', 'informacion.html'));}) //Hace lo mismo para la página 3.
//OP res.sendFile(path.join(__dirname,'../public', 'page1.html'));
//OP res.sendFile //Este método envía archivos como respuesta a la solicitud del cliente. Aquí
//estamos construyendo la ruta completa del archivo usando path.join.
path.join(__dirname, '../public', 'inicio.html') // __dirname es una variable global que contiene la ruta del directorio actual (routes en este caso), y luego usamos path.join para movernos a la carpeta public (subiendo un nivel ../) y acceder al archivo page1.html.
module.exports = router; //Exportamos el router para que pueda ser usado en el archivo principal app.js.