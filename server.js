var express = require("express");
var PORT = process.env.PORT || 8081;

var app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("./app/public"));

require("./app/routes/api-routes")(app);

app.listen(PORT, function () {
    console.log("server is connected on https://localhost/" + PORT);
});