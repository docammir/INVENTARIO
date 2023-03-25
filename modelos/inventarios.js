const { Schema, model } = require("mongoose");

const Inventario = Schema({
  //clave:valor
  nombre: {
    //objeto
    type: String,
    required: [true, "Nombre requerido"],
  },
  serial: {
    type: String,
    default: true,
    required: true,
    required: [true, "serial requerido"],
  },

  modelo: {
    type: String,
    default: true,
    required: true,
    unique: [true, "Modelo requerido"],
  },

  descripcion: {
    type: String,
    default: true,
    required: true,
    required: [true, "Descripcion requerido"],
  },

  foto: {
    type: String,
    default: true,
    required: true,
    required: [true, "Foto requerida"],
  },

  color: {
    type: String,
    default: true,
    required: true,
    required: [true, "Color requerido"],
  },

  precio: {
    type: Number,
  },

  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    require: true,
  },

  fechaCompra: {
    type: Date,
    default: new Date(),
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

module.exports = model("Inventarios", Inventario);
