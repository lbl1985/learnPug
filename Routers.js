var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render('index');
});

router.get("/attributes", function (req, res) {
    res.render("attributes");
});

router.get("/case", function(req, res) {
    res.render("case");
});

module.exports = router;