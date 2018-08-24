// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else{

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "u40gaxk1daodm409",
  password: "bpjv6739l8dp05iy",
  database: "j2x8ji89brsq11iz"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
