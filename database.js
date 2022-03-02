const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'jea'
});
module.exports = connection;