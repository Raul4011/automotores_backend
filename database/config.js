
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4011',
    database: 'automotores'
});


module.exports = {connection}