
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Campfire camping",
        image: "https://www.visitnj.org/sites/default/files/styles/article_slideshow_full/public/Camping.jpg?itok=TasVUUyx",
        description: "But what's the real problem we're trying to solve here? quantity or teams were able to drive adoption and awareness we are running out of runway. Red flag. High touch client peel the onion, or staff engagement. Upsell moving the goalposts, or forcing function yet this is a no-brainer shotgun approach."
    },
    {
        name: "Lakeview Camping",
        image: "https://img.hipcamp.com/image/upload/c_fill,f_auto,g_auto,h_504,q_60,w_770/v1532453182/campground-photos/l9ysbw8djinftbs5xhha.jpg",
        description: "Pushback knowledge process outsourcing nor nail it down sorry i didn't get your email, i don't want to drain the whole swamp, i just want to shoot some alligators, synergestic actionables. We need to start advertising on social media. Enough to wash your face gain traction close the loop and dogpile that for single wringable neck."
    },
    {
        name: "Hilltop Camping",
        image: "https://www.tripsavvy.com/thmb/hD3_T2KhE8gQXrD-I560zKfH2iQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/4008019776_66cfa6ac4a_o-5660b3095f9b583386bbda64.jpg",
        description: "We need to have a Come to Jesus meeting with Phil about his attitude drink the Kool-aid, run it up the flagpole pivot nor fire up your browser, nor can you slack it to me?"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed campgrounds!");
          //add a few campgrounds
         data.forEach(function(seed){
             Campground.create(seed, function(err, campground){
                 if(err){
                     console.log(err)
                 } else {
                     console.log("added a campground");
                     //create a comment
                     Comment.create(
                         {
                             text: "This place is great, but I wish there was internet",
                             author: "Homer"
                         }, function(err, comment){
                             if(err){
                                 console.log(err);
                             } else {
                                 campground.comments.push(comment);
                                 campground.save();
                                 console.log("Created new comment");
                             }
                         });
                 }
             });
         });
     }); 
     //add a few comments
 }
 
 module.exports = seedDB;