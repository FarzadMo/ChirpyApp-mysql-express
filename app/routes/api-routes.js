var connection = require("./../config/connection");


module.exports = function (app) {

    app.get("/api/all", function (req, res) {

        var queryDb = "SELECT * FROM chirps;"
        connection.query(queryDb, function (err, result) {
            if (err) {
                return res.status(500).end();
            }
            res.json(result);
        });
    });



    app.post("/api/new", function (req, res) {
        var queryDb = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?);"
        connection.query(queryDb, [req.body.author, req.body.body, req.body.created_at], function (err, result) {
            if (err) {
                return res.status(500).end();
            }
            res.end();
        });
    });

};