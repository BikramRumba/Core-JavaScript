// let characters = ['Sonice', 'Tails', 'Mario', 'Luigi', 'Link'];
//this is new loop comes with es6
// for (variable of iterable) {

// }

// for (x of characters) {
// 	console.log(x);
// }

// let course = 'JavaScript';

// for (letter of course) {
// 	console.log(letter);
// }

// let characters = ['Sonice', 'Tails', 'Mario', 'Luigi', 'Link'];

// for (x of characters) {
// 	if (x === 'Luigi') {
// 		break;
// 	} else {
// 		console.log(x);
// 	}
// }
// TASKS
let colours = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

// for (color of colours) {
// 	console.log(color);
// }

for (color of colours) {
	if (color === 'Green') {
		break;
	} else {
		console.log(color);
	}
}

// TAKEAWAYS
/* 
We should use for ...in loop when we want to loop over properties
of an object
We should use FOR ..OF loops when we want to loop over values of a n iteranle data structure
For example: array and String
together we make up call control flow.
 */
