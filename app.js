var express = require('express');
var path = require('path');

var router = require('./Routers');

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "views"));

app.use(router);

app.listen(app.get("port"), function () {
    console.log("Server started on port " + app.get("port"));
});