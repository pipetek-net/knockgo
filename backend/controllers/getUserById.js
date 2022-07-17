const Usuario = require("../model/usuario");
// se crea el metodo para obtener un usuario por su id
const getUserById = async (req, res) => {
  const { id } = req.user;

  if (id.length === 24) {
    Usuario.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "Usuario no encontrado",
        });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Token incorrecto" });
  }
};

module.exports = getUserById;