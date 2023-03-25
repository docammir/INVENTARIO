const EstadoEquipo = require("../modelos/estadoEquipos");
const { request, response } = require("express");

// crear
const createestadoEquipo = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const estadoEquiposDB = await estadoEquipos.findOne({ nombre }); //select * from estadoEquipos where nombre=?

    if (estadoEquiposDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre, // nombre: nombre
    };
    const estadoEquipos = new estadoEquipos(data);
    console.log(estadoEquipos);
    await estadoEquipos.save();
    return res.status(201).json(estadoEquipos);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//listar todos
const getestadoEquipos = async (req = request, res = response) => {
  try {
    const { estado } = req.query;
    const estadoEquiposDB = await EstadoEquipo.find({ estado }); //select * from estadoEquipos where estado=?
    return res.json(estadoEquiposDB);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

// actualizar
const actualizarEstadoEquipos = async (req, res) => {
  try {
    let id = req.query.id,
      data = req.body,
      eliminado = await EstadoEquipo.findByIdAndUpdate(id, data);

    if (!eliminado)
      return res.status(404).json({ msg: "El Estado equipo no existe" });

    res.status(200).json({ msg: "El Estado equipo  ha sido actualizado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al procesar la petición" });
  }
};
// eliminar
const eliminarEstadoEquipo = async (req, res) => {
  try {
    let id = req.query.id,
      eliminado = await EstadoEquipo.findByIdAndDelete(id);

    if (!eliminado)
      return res.status(404).json({ msg: "El Estado equipo  no existe" });

    res.status(200).json({ msg: "El Estado equipo  ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al procesar la petición" });
  }
};

module.exports = {
  eliminarEstadoEquipo,
  actualizarEstadoEquipos,
  getestadoEquipos,
  createestadoEquipo,
};
