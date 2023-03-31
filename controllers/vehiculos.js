const {connection} = require('../database/config')


const all = (req,res) =>{
    connection.query("SELECT * FROM vehiculos", (error, results) => {
        if (error) throw error;
        res.json(results);
      });
      //console.log('Todos los vehiculos OK')
}

const single = (req,res) => {
    
        const id = req.params.id;
        connection.query(
          "SELECT * FROM Vehiculos WHERE id=" + id,
          (error, results) => {
            if (error) throw error;
            res.json(results);
          }
        );
      
}

const create = (req,res) => {
    console.log(req);
    connection.query(
        "INSERT INTO vehiculos set ?",
        {
          marca: req.body.marca,
          modelo: req.body.modelo,
          anio: req.body.anio,
          tipo: req.body.tipo,
          motor: req.body.motor,
          imagen: req.body.imagen,
          precioCompra: req.body.precioCompra,
          patente: req.body.patente,
          color: req.body.color,
        },
        (error, results) => {
          if (error) throw error;
          res.send(results);
        }
      );
      //console.log('Creacion de un Automovil');
}

const edit = (req,res) =>{
  const id = req.params.id;
  const { marca, modelo, anio , motor , tipo, imagen , precioCompra , patente , color } = req.body;

  connection.query(
    `UPDATE VEHICULOS set marca = '${marca}',
                          modelo = '${modelo}',
                          anio = ${anio},
                          tipo = '${tipo}',
                          motor = '${motor}',
                          imagen = '${imagen}',
                          precioCompra = '${precioCompra}',
                          patente = '${patente}',
                          color = '${color}' 
                          where id = ${id}   
    `,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
}

const suprimir = (req,res) => {
    const id = req.params.id;
    connection.query("DELETE FROM vehiculos WHERE id=" + id, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
}

module.exports = { all , single , create , edit , suprimir }