const TipoEquipo = require('../modelos/tipoEquipos')
const { request, response} = require('express')


// crear
const createTipoEquipo = async (req = request,
    res = response) => {
    try{
        const nombre = req.body.nombre
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoEquipoDB = await TipoEquipo.findOne({nombre})//select * from tipoEquipo where nombre=?
       
        if(tipoEquipoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoEquipo = new TipoEquipo(data)
        console.log(tipoEquipo)
        await tipoEquipo.save()
        return res.status(201).json(tipoEquipo)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//listar todos
const getTipoEquipos = async (req = request,
    res = response) => {
        try{
            const { estado } = req.query
            const tipoEquiposDB = await TipoEquipo.find({estado})//select * from tipoEquipo 
            return res.json(tipoEquiposDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const actualizarTipoequipos = async (req, res) => {
    try {
      let id = req.query.id,
        data = req.body,
        eliminado = await tipoEquipos.findByIdAndUpdate(id, data);
  
      if (!eliminado)
        return res.status(404).json({ msg: "El tipo de marca no existe" });
  
      res.status(200).json({ msg: "El tipo de equipo se actualizo actualizado" });
    } catch (error) {
      res.status(500).json({ msg: "Error al procesar la petición" });
    }
  };
  // eliminar
  const eliminarTipoEquipos = async (req, res) => {
    try {
      let id = req.query.id,
        eliminado = await tipoEquipos.findByIdAndDelete(id);
  
      if (!eliminado)
        return res.status(404).json({ msg: "El el tipo de equipo no existe" });
  
      res.status(200).json({ msg: "El tipo de equipo ha sido eliminado" });
    } catch (error) {
      res.status(500).json({ msg: "Error al procesar la petición" });
    }
  };
  
  module.exports = {
    createTipoEquipo,
    getTipoEquipos,
    eliminarTipoEquipos,
    actualizarTipoequipos,
  };
