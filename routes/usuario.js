const { Router } = require("express");
const {
  createUsuarios,
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuarios
} = require("../controllers/usuario");

const router = Router();

// crear
router.post("/", createUsuarios);
// consultar todos
router.get("/", listarUsuarios);
// actualizar
router.put("/", actualizarUsuario);
// eliminar
router.delete('/', eliminarUsuarios)

module.exports = router;
