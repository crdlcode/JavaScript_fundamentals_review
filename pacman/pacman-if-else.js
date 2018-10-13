// pacman-if-else
var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze');

// # pacman.rb
// power_pellet_eaten = false
// ghosts = 4
// while true do
//   puts "Ghosts remaining: #{ghosts}"
//
//   if power_pellet_eaten == false
//     puts 'Pac-Man eats the power pellet.'
//     power_pellet_eaten = true
//   elsif ghosts > 0
//     puts 'Pac-Man eats a ghost.'
//     ghosts--
//   else
//     break
//   end
// end
//
// puts 'Pac-Man goes home after a long day in the maze.'
