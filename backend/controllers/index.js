//Se crean las rutas de los contoladores para enviarlas a app.js
const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");

module.exports = {
  register,
  login,
  getUserById,
};
