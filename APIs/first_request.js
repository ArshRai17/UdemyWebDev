// var request = require('request');
// request("https://wwww.bing.com", function(error, response, body){
//     if(error){
//         console.log("something went wrong");
//         console.log(error);
//     } else {
//         if(response.statusCode == 200){
//             console.log(body)
//         }
//     }
// });

var request = require('request');
console.log("Sunset in Hawaii is at..")
request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["query"]["address"]["geo"]);
    }
});