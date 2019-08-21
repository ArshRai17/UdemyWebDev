var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authentication", {useNewUrlParser: true});

var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
})

app.listen(3000, function(){
    console.log("The YelpCamp server has started!")
});