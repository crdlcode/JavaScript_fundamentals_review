// Setup
var myArray = [0,1,2,3,4,5];
var i = 5;
while(i > 1) {
    myArray.pop(i);
    i--;
}
// Only change code below this line.

var ourArray = [];
var i = 0;
while(i <= 10) {
	ourArray.push(i);
	i++;
}
console.log(myArray);
console.log(ourArray);
