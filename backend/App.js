const express = require('express');
const cors = require('cors');
const db = require('./database/db');

const controllers = require('./controllers');
const verifyToken = require("./middlewares/verifyToken");// middleware para verificar el token

const app = express();// se crea el servidor

app.use(cors());
app.use(express.json());

app.get("/user", verifyToken, controllers.getUserById); // se crea la ruta para obtener un usuario
app.post("/register", controllers.register);// se crea la ruta para registrar un usuario
app.post('/login', controllers.login);// se crea la ruta para el login

const port = 3001; // puerto de express

app.listen(port, () => {
    console.log(`Backend funcionando en  ${port}`);// se muestra en consola que el servidor esta funcionando
    db();// se ejecuta el metodo para conectar a la base de datos
});

module.exports = app;