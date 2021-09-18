const mysql = require("mysql");
// const dbConfig = require("./db.config").get(process.env.NODE_ENV);
const dbConfig = require("./db.config");
const connection = mysql.createConnection({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.db
});

// const connection2     = mongoose.createConnection('mongodb://localhost/testB');

connection.connect(error => {
  if (error) throw error;
  console.log("Sucessfully connected");
});
connection.query('select 1 + 1', (err, rows) => { /* */ });

module.exports = connection;
