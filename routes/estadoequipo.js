const { Router } = require("express");
const {
  createestadoEquipo,
  getestadoEquipos,
  actualizarEstadoEquipos,
  eliminarEstadoEquipo,
} = require("../controllers/estadoEquipo");

const router = Router();

// crear
router.post("/", createestadoEquipo);
// consultar todos
router.get("/", getestadoEquipos);
router.put("/", actualizarEstadoEquipos);
router.delete("/", eliminarEstadoEquipo);

module.exports = router;
