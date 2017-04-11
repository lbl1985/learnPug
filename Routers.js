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

router.get("/code", function(req, res) {
    res.render("code");
});

router.get("/comments", function(req, res) {
    res.render("comments");
});

router.get("/conditionals", function(req, res) {
    res.render("conditionals");
});

router.get("/filters", function(req, res) {
    res.render("filters");
});

router.get("/Inheritance", function(req, res) {
    res.render("Inheritance_page_a", {title:"hello world"});
})

module.exports = router;