/*  Locally scope meaning those variables are only accessible and
 can only be used inside of that function.
 
 SCOPE refers to where a variable is declared and from where it can be accessed.
There are two types of SCOPE in JavaScript:
Global and Local Scope

 */
// let game = 'Sonic'; //global variable
// console.log(game);
// function title() {
// 	console.log(`${game}`);
// }
// title();
// if (true) {
// 	console.log(`${game}`);
// }
// function a() {
// 	let game = 'Chess'; //local variable. It is also called functional scope because it is created inside the function
// 	console.log(game);
// }
// a();
// if (true) {
// 	console.log(game); // we cannot use this variable because it was locally declared in different function
// }
// if (true) {
// 	let game = 'Mario';
// 	console.log(game);
// }
/* Variables can have same variable name 
if they are declared inside the different cold blocks */
/* Disadvantage of global variable is that there is a higher risk of those variables 
 being overwritten */
// function hello() {
// 	var greeting = 'hello'; // var is only locally scoped inside of a function. Not in any other cold block if/else, switch
// }
// console.log(greeting);
// if (true) {
// 	var greeting = 'hello';
// }
// console.log(greeting); // It will print hello because var has broken out of this cold block(if/else) scope
//  Such scenario will be problem for security.
// if (true) {
// 	let greeting = 'hello'; // value has been securely scoped inside thisc cold block scope
// }
// console.log(greeting); // It will throw error because let prevents the local scope in all cold block
/* var x = 10;
console.log(x);
if (true) {
	var x = 2;
	console.log(x);
}

console.log(x); */
// original value 10 now has overwritten by var and returns value of 2
// This scenario is called the Name Clash. This is one of the reasons why we want block scope let and const
/* let x = 10;
console.log(x);
if (true) {
	let x = 2;
	console.log(x);
}

console.log(x) */
// It will return 10 global variable's value.

// TASKS

function info() {
	let firstName = 'John';
	let lastName = 'Smith';
	let age = 25;
	let country = ' England';
	console.log(
		`${firstName} ${lastName} is ${age} years old and lives in ${country} .`
	);
}
let firstName = 'James';
info();

let game = 'Sonic';
if (true) {
	let game = 'Mario';
	console.log(game);
}

console.log(game);
