var friends = require("../data/friends.js");

// route to view all friends
//also include api routes in server.js file
module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

app.post("/api/friends", function(req, res){

var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000
};

console.log(req.body);

//Result of the User's survey POST and parse it
var userData = req.body;
var userScores = userData.score;

console.log(userScores);

//This variable will calculate the difference between the user's scores and the scores of each user in the database
var totalDifference = 0;

//Loop through all the friend possibilities in the database
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    totalDifference = 0;

//Loop through all scores of each friend
for (var j = 0; j < friends[i].scores[j]; j++) {

//Caculate the difference between the scores and sum them into the totalDifference
totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

//If the sum of the difference is less then the differences of the current "best match"
if (totalDifference <= bestMatch.friendDifference) {

    //Reset the bestMatch to be the new friend
    bestMatch.name = friends[i].name;
    bestMatch.photo = friends[i].photo;
    bestMatch.friendDifference = totalDifference;
        }
    }
}

//Lastly save the user's data to the database 
friends.push(userData);

//Return a JSON with the user's bestMatch.  This will be used by the HTML in the next page
res.json(bestMatch);

});
}
