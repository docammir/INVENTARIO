const Usuarios = require("../modelos/usuarios");
const { request, response } = require("express");

// crear
const createUsuarios = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const usuariosDB = await Usuarios.findOne({ nombre }); //select * from usuario

    if (usuariosDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre, // nombre: nombre
    };
    const newUsuario = new Usuarios(data);
    console.log(newUsuario);
    await newUsuario.save();
    return res.status(201).json(newUsuario);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//listar todos
const listarUsuarios = async (req = request, res = response) => {
  try {
    console.log("Ejecuto usuarios");
    // const { estado } = req.query;
    const usuariosDB = await Usuarios.find({});
    if (usuariosDB.length == 0)
      return res.status(404).json({ msg: "No se encuentran datos" });
    //select * from usuario where estado=?
    return res.json(usuariosDB);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

// actualizar
const actualizarUsuario = async (req, res) => {
  try {
    let id = req.query.id,
      data = req.body,
      actualizado = await Usuarios.findByIdAndUpdate(id, data);

    if (!actualizado)
      return res.status(404).json({ msg: "El usuario no existe" });

    res.status(200).json({ msg: "El usuario ha sido actualizado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al procesar la petición" });
  }
};
// eliminar
const eliminarUsuarios = async (req, res) => {
  try {
    let id = req.query.id,
      eliminado = await Usuarios.findByIdAndDelete(id);

    if (!eliminado)
      return res.status(404).json({ msg: "El usuario no existe" });

    res.status(200).json({ msg: "El usuario ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al procesar la petición" });
  }
};

module.exports = {
  createUsuarios,
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuarios,
};
