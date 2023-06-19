const express = require("express");
const tipoEquipo = require("./routes/tipoEquipo");
const usuario = require("./routes/usuario");
const Marca = require("./routes/marca");
const Inventario = require("./routes/inventario");
const estadoEquipo = require("./routes/estadoequipo");
const dotenv = require("dotenv").config();

const app = express();



// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//postman
app.post("/api/usuarios", (req, res) => {
    console.log ( req.body)
    res.send(200, {message:"se ha recibido"})
    })

/*app.use("/api/usuarios", (req, res) => {
    console.log ( req.body)
    res.send(200, {message:"se ha recibido"})
    }

)*/


app.use("/api/tiposequipos", tipoEquipo);
app.use("/api/usuario", usuario);
app.use("/api/marca", Marca);
app.use("/api/inventario", Inventario);
app.use("/api/estadoequipo", estadoEquipo);

module.exports = app;
