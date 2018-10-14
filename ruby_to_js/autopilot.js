function getNewCar() {
  var newCar = {
    city: 'Toronto',
    passenger: 0,
    gas: 100
  }
  return newCar;
}

function addCar(cars, new_car) {
  cars.push(newCar);
  return "Added a new fleet to the car. Fleet is now " + cars.length + " cars.";
}

function pickUpPassenger(car) {
  car.passenger += 1;
  car.gas -= 10;
  return "Picked up a passenger. The car now has " + car.passengers + " passengers.";
}

function getDestination(car) {
  if (car.city === 'Toronto')
}
