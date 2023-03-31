const {connection} = require("../database/config")
const jwt = require("jsonwebtoken")
const axios = require('axios')

const Key_Token = 'Raulin'


const all =(req,res) =>{
    connection.query("SELECT * FROM Usuarios", (error, results) => {
        if (error) throw error;
        res.json(results);
      });
}

const create = (req,res) => {
    connection.query(
        "INSERT INTO usuarios set ?",
        {
          usuario: req.body.usuario,
          direccion: req.body.direccion,
          telefono: req.body.telefono,
          email: req.body.email,
          contraseña: req.body.contraseña,
        },
        (error, results) => {
          if (error) throw error;
          res.send(results);
        }
      );
}

const login = async (req,res) =>{
  //console.log(req.body);
  const usuario = req.body.usuario
  const password = req.body.password 
  try {
    const response = await axios.get('http://localhost:8000/usuarios');
    const usuarios = response.data;
    //console.log(usuarios);
    const verifiedData = usuarios.some(user => user.usuario === usuario && user.password === password);
    //console.log(verifiedData);
    
    if (verifiedData) {
      const token = jwt.sign(
        {user:usuario,pass:password},
        Key_Token,
        {expiresIn:"2h"}
      )
      let nDatos = {usuario,password,token}
      res.status(200).json(nDatos)
    }else {
      res.status(400).send("credenciales incorrectas")
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {all , create , login}