/* JavaScript has 7 primitive data types and 1 non-primitive data types (objects --->arrays, function, object) */

//Primitive datatypes. there is no float, or double in javascript to define numbers. We just have Number

let num = 7;
let newNum = 7.58;

// String can be defined by using "" or ''
let favFood = 'pizza';
let favColor = 'purple';

// 3rd data types is boolean
console.log(100 > 1);
let js = 'cool';
console.log(js == 'cool');

// Big int is another data type. It is used to assign and define big numbers. We will add  'n' at the end
let bigNumber = 23454646753454654564n;
console.log(typeof bigNumber);

// Undefined is also the data types which is defined as a varaible but not assigned any value.
let channelName;
console.log(typeof channelName);

// Non-primitive data types. (objects[arrays, functions, objects])
let myList = ['Bikram', true, 'Believer', 7];
console.log(myList[0]);

// function data types
function hello() {
	console.log('hello');
}

// OR
let sayHello = function () {
	console.log('saying hello');
};
hello(); //function invocation
sayHello();

// Objects data types
let character = {
	name: 'Sonic the hedgehog',
	color: 'blue',
	speed: 1000,
	fast: true,
};

console.log(character.speed);

// Tasks
let favDrink = 'Moscato';

let favNum = 7;

let myFavs = function () {
	console.log(favDrink, favNum);
};
myFavs();

let person = {
	name: 'John',
	age: 30,
};
console.log(person);
