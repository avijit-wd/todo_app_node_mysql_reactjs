const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: process.env.PASSWORD,
  database: "TodoDB",
  multipleStatements: true,
});

module.exports = db;
