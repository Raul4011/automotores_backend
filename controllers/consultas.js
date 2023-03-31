const {connection} = require("../database/config")


const all =(req,res) =>{
    connection.query("SELECT * FROM Consultas", (error, results) => {
        if (error) throw error;
        res.json(results);
      });
}

const create = (req,res) => {
    connection.query(
        "INSERT INTO Consultas set ?",
        {
          nomyape: req.body.nomyape,
          email: req.body.email,
          telefono: req.body.telefono,
          ciudad: req.body.ciudad,
          fechaConsulta: req.body.fechaConsulta,
          descripcion: req.body.descripcion
        },
        (error, results) => {
          if (error) throw error;
          res.send(results);
        }
      );
}

module.exports = { all , create}