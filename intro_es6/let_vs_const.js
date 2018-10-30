var: function scope
let & const: block = scope

const key = 'abc123';
let points = 50;
let winner = false;

if(points > 40) {
	let winner = true
}

let winner = false outside of the if loop is scoped to the window
let winner = true inside the if loop is scoped to the block

=====================
const key = 'abc123';
let points = 50;
let winner = false;

points = 60;

// this will work just fine

const key 'abc123';
let points = 50;
let winner = false;

key = abc1234;

// this won't work because you cannot update a const variable, wheras you can update a let variable

const person = {
	name: 'Wes',
	age: 28
}

// if you try to update something by typing person = {name: 'Wesley'} it won't allow me to do that

// However, the properties of a const variable can change. that's because the entire object is not immutable. It just can't be reassigned entirely

// the way you can think of it with an object is that the person is you. You are not going to change as whole but attributes will change

const person = {
	name: 'Wes',
	age: 28
}
person.age = 29

// this will work

// if you need to freeze everything you can use something called object.freeze

const wes = Object.freeze(person);

// wes.age = 30, it will still say 28