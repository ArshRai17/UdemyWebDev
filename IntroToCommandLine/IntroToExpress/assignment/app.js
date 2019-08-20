var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welome to my assignement.") 
});


app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "moo",
        dog: "woof woof",
        cat: "I hate you human",
        goldfish: "...."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'"); 
});


app.get("/repeat/:message/:times", function(req, res){
   var message = req.params.message;
   var times = Number(req.params.times);
   var result = "";
   for(var i = 0; i < times; i++){
       result += message + " ";
   }
   res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found. What are you going with your life?")
})

//Listen

app.listen(process.env.PORT, process.env.TP, function(){
    console.log("Now serving you app!");
})