const  bcrypt = require('bcrypt');
const Usuario = require('../model/usuario');



const register = (req, res) => {
    const { nombre, correo, contraseña} = req.body;
    //metodo para registrar al usuario y revisar si ya existe en la base de datos
    Usuario.findOne({ correo }).then((usuario) => {
        if (usuario) {
          return res.json({ mensaje: "Usuario ya rgistrado" }); // si el usuario ya existe en la base de datos retorna un mensaje
        } else if (!nombre || !correo || !contraseña) {
          return res.json({ mensaje: "Revise que los campos tengan contenido" }); // si los campos estan vacios retorna un mensaje para revisar los campos
        } else {
          //metodo para encriptar la contraseña y agregar seguridad
          bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
            if (error) res.json({ error });
            else {
              const nuevoUsuario = new Usuario({
                nombre,
                correo,
                contraseña: contraseñaHasheada,
              });
              nuevoUsuario.save().then((usuario) => {
                  res.json({ mensaje: "Usuario creado correctamente", usuario });// si el usuario se crea correctamente retorna un mensaje 
                }).catch((error) => console.error(error));
            }
          });
        }
    });
}

module.exports = register;
