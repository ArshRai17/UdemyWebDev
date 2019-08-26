var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost/authentication", {useNewUrlParser: true});


var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Cutest boy in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//==============
//ROUTES
//==============


// Auth Routes
//Show signup form
app.get("/register", function(req, res){
    res.render("register");
});
//Handling sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register')
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret",isLoggedIn, function(req, res){
    res.render("secret");
})


// LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
    res.render("login");
});
//login logic
//middleware
app.post("/login",passport.authenticate("local", {
    successRedirect:"/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});


//logout logic
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/")
});


//Middleware logic
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("Server has started!")
});