const inventarios = require("../modelos/inventarios");
const { request, response } = require("express");

// crear
const createinventarios = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const invetariosDB = await invetarios.findOne({ nombre }); //select * from invetarios

    if (invetariosDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre, // nombre: nombre
    };
    const invetarios = new invetarios(data);
    console.log(invetarios);
    await invetarios.save();
    return res.status(201).json(invetarios);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//listar todos
const getinventarios = async (req = request, res = response) => {
  try {
    const { estado } = req.query;
    const invetariosDB = await inventarios.find({ estado }); //select * from invetarios where estado=?
    return res.json(invetariosDB);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

// actualizar
const actualizarinventarios = async (req, res) => {
  try {
    let id = req.query.id,
      data = req.body,
      eliminado = await inventarios.findByIdAndUpdate(id, data);

    if (!eliminado)
      return res.status(404).json({ msg: "El el inventario no existe" });

    res.status(200).json({ msg: "El inventario ha sido actualizado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al procesar la petición" });
  }
};
// eliminar
const eliminainventario = async (req, res) => {
  try {
    let id = req.query.id,
      eliminado = await inventarios.findByIdAndDelete(id);

    if (!eliminado)
      return res.status(404).json({ msg: "El inventario no existe" });

    res.status(200).json({ msg: "El inventario ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al procesar la petición" });
  }
};

module.exports = {
  eliminainventario,
  actualizarinventarios,
  getinventarios,
  createinventarios,
};
