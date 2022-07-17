const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const jwt = require("jsonwebtoken");
//metodo pala logueo de usuario
const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no existe" });  // si el usuario no existe en la base de datos retorna un mensaje
    }
    //metodo que compara la contraseña ingresada con la contraseña hasheada en la base de datos
    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;

        const data = {
          id,
          nombre,
        };

        const token = jwt.sign(data, "secreto", {
          expiresIn: 28800 // para que expire en 8 horas
        });

        res.json({
          mensaje: "Usuario logeado correctamente", // si la contraseña es correcta retorna un mensaje
          usuario: {
            id,
            nombre,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" }); // si la contraseña es incorrecta retorna un mensaje
      }
    });
  });
};

module.exports = login;
