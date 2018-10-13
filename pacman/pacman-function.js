// Named function
function eatDot() {
  console.log("MUNCH!");
}

//Anonymous function
//Here we assign the function to a variable instead of giving it a name
var eatDot = function() {
  console.log("MUNCH!");
}

eatDot();

var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
  var record = { player: playerInitials, score: score};
  highScoreList.push(record); // add record to array
}

addHighScore(highScores, 'SDL', 2000);
addHighScore(highScores, 'JSL', score: 10000);
