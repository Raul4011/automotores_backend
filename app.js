const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const {connection} = require('./database/config')

const app = express();
const vehiculos = require('./routes/vehiculos') 
const empleados = require("./routes/empleados")
const consultas = require('./routes/consultas')
const usuarios = require('./routes/usuarios')

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000


app.use('/',vehiculos)
app.use('/',empleados)
app.use('/',consultas)
app.use('/',usuarios)


app.get("/", (req, res) => {
  res.send("Welcome to Automotores Program 2023<br/>Raul Politi Web Developer<br> ");
});


connection.connect((error) => {
  if (error) throw error;
  console.log("Conexion establecida con la DB");
});


app.listen(PORT, () => {
  console.log("escuchando en el puerto",PORT);
});
