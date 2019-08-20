
var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Campfire camping",
        image: "https://www.visitnj.org/sites/default/files/styles/article_slideshow_full/public/Camping.jpg?itok=TasVUUyx",
        Description: "Bonfire, BBQ, and camping"
    },
    {
        name: "Lakeview Camping",
        image: "https://img.hipcamp.com/image/upload/c_fill,f_auto,g_auto,h_504,q_60,w_770/v1532453182/campground-photos/l9ysbw8djinftbs5xhha.jpg",
        Description: "Solo camping by the lake"
    },
    {
        name: "Hilltop Camping",
        image: "https://www.tripsavvy.com/thmb/hD3_T2KhE8gQXrD-I560zKfH2iQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/4008019776_66cfa6ac4a_o-5660b3095f9b583386bbda64.jpg",
        Description: "Camping at the top on of a hill"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campground
    data.forEach(function(seed){
        Campground.create(seed, function (err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("added a campground");
                //create a comment
                Comment.create(
                    {
                        text: "This place is great and it does not have internet. Perfect!",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comments");
                        }
                    });
            }
        });
    });
    });
}

module.exports = seedDB;