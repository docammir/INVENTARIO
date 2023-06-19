const { Schema, model } = require("mongoose");

const Usuario = Schema({
  //clave:valor

  nombre: {
    //objeto
    type: String,
    required: [true, "Nombre requerido"],
  },

  password:{
    //objeto
    type: String,
    required: [true, "contraseña requerido"],
  },

  rol:{
    //objeto
    type: String,
    
  },

  estado: {
    type: Boolean,
    default: true,
    required: true,
  },

  email: {
    type: String,
    default: true,
    required: true,
  },

  fechaCreacion: {
    type: Date,
    default: new Date(),
  },

  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },

  

});

module.exports = model("Usuarios", Usuario);
