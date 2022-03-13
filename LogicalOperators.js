// JavaScript 'Falsy' values
//  false, undefined, null, ''(empty string), NaN, 0
// ?? Nullish Coalescing

// let a = 1; // true
// a = !a;
// console.log(typeof a, a);
// let b = 0; //false
// b = !b; // b = not false. true

// console.log(typeof b, b);

// let x = 1; //true
// let y = 0; // false

// if (x && y) {
// 	console.log('hello');
// }

// if (x || y) {
// 	console.log('hello');
// }

// x || alert('This is ignored since x is true');
// y || alert('This is alerted since y is false');

// TASKS
let a = 'Dev Dreamer';
let b = '';

if (a || b) {
	console.log('hello');
}

if (a && true && !b) {
	console.log('hello');
}

let x = -1;
let y = 1;

if (x && y) {
	console.log('hi');
}
