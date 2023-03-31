const {connection} = require("../database/config")


const all =(req,res) =>{
    connection.query("SELECT * FROM Empleados", (error, results) => {
        if (error) throw error;
        res.json(results);
      });
}

const single =(req,res) =>{
    const id = req.params.id;
  connection.query(
    "SELECT * FROM Empleados WHERE id=" + id,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
}

const create =(req,res) =>{
    connection.query(
        "INSERT INTO Empleados set ?",
        {
          nomyape: req.body.nomyape,
          direccion: req.body.direccion,
          localidad: req.body.localidad,
          provincia: req.body.provincia,
          cuil: req.body.cuil,
          tel: req.body.tel,
          fechaIngreso: req.body.fechaIngreso,
          fechaNac: req.body.fechaNac,
          email: req.body.email,
        },
        (error, results) => {
          if (error) throw error;
          res.send(results);
        }
      );
}

const edit =(req,res) =>{
    const id = req.params.id;
  const { nomyape, direccion, localidad , provincia , cuil, tel, fechaIngreso,fechaNac,email } = req.body;

  connection.query(
    `UPDATE EMPLEADOS set nomyape = '${nomyape}',
                          direccion = '${direccion}',
                          localidad = '${localidad}',
                          provincia = '${provincia}',
                          cuil = '${cuil}',
                          tel = '${tel}',
                          fechaIngreso = '${fechaIngreso}',
                          fechaNac = '${fechaNac}',
                          email = '${email}' 
                          where id = ${id}   
    `,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
}

const suprimir =(req,res)=>{
    const id = req.params.id;
  connection.query("DELETE FROM empleados WHERE id=" + id, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
}

module.exports = {all,single,create,edit,suprimir}