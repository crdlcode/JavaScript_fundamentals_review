//pacman-switch.js
//switch statement is like the case statement in Ruby
var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);
