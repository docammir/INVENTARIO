const marcas = require('../modelos/marcas')
const { request, response} = require('express')


// crear
const createmarcas = async (req = request,
    res = response) => {
    try{
        const nombre = req.body.nombre
            ? req.body.nombre.toUpperCase()
            : ''
        const marcasDB = await marcas.findOne({nombre})//select * from marcas where nombre=?
       
        if(marcasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoEquipo = new marcas(data)
        console.log(marcas)
        await marcas.save()
        return res.status(201).json(marcas)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//listar todos
const getmarcas = async (req = request,
    res = response) => {
        try{
            const { estado } = req.query
            const marcasDB = await marcas.find({estado})//select * from marcas 
            return res.json(marcasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const actualizarmarcas = async (req, res) => {
    try {
      let id = req.query.id,
        data = req.body,
        eliminado = await marcas.findByIdAndUpdate(id, data);
  
      if (!eliminado)
        return res.status(404).json({ msg: "La marca no existe" });
  
      res.status(200).json({ msg: "La marca se actualizado" });
    } catch (error) {
      res.status(500).json({ msg: "Error al procesar la petición" });
    }
  };
  // eliminar
  const eliminarmarcas = async (req, res) => {
    try {
      let id = req.query.id,
        eliminado = await marcas.findByIdAndDelete(id);
  
      if (!eliminado)
        return res.status(404).json({ msg: "La marca no existe" });
  
      res.status(200).json({ msg: "La marca se a eliminado" });
    } catch (error) {
      res.status(500).json({ msg: "Error al procesar la petición" });
    }
  };
  
  module.exports = {
    actualizarmarcas,
    eliminarmarcas,
    getmarcas,
    createmarcas
  };
