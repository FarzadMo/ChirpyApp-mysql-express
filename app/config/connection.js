var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    user: "root",
    password: "farzad1365",
    host: "localhost",
    database: "chirpy"
});

connection.connect(function (err) {
    if (err) {
        console.log("The error is" + err.stack);
        return;
    }
    console.log("connection is connected as" + connection.threadId);
});

module.exports = connection;