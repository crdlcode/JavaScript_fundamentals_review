// pacman-objects-2.js
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};

console.log(ghosts);
// dot-notation
console.log(ghosts.inky);
console.log(ghosts.blinky);
// square bracket notation
console.log(ghosts['inky']);
console.log(ghosts['blinky']);

//square bracket notation is used when the property you want to retrieve on an object is stored in a variable:

var ghostName = 'clyde';
console.log(ghosts[ghostName]);
