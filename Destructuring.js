/*  Destructuring was also introduced with the ES6  */
// const game = {
// 	title: 'Donkey Kong Country',
// 	platform: 'SNES',
// 	year: 1994,
// };
/* 
let title = game.title;
let platform = game.platform;
let year = game.year; 
This steps is not handy and space consuming.
So, JavaScript introduces Destructuring in ES6
where we will be using { } assigning with the object
*/
// Object Destructuring. It won't change or mutate the original object
// We can also create a variable name for the destructuring properties
// let { title: t, platform: p, year: y } = game;
// let { title, platform, year } = game;

// console.log(title, platform, year);
// console.log(t, p, y);

// We can destructure for nested object as well
// const game = {
// 	title: 'Donkey Kong Country',
// 	platform: 'SNES',
// 	year: 1994,
// 	character: {
// 		main: 'Donkey Kong',
// 		side: 'Diddy Kong',
// 		boss: 'King K. Rool',
// 	},
// };

//  Destructuring Nested object
// let {
// 	title,
// 	platform,
// 	character,
// 	character: { main, side, boss },
// } = game;

// console.log(main, side, boss);

// console.log(character);

// let { length } = 'Bikram';
// console.log(length);

/* Array Destructuring */
/* 
const book = [
	'The Last Battle',
	'C.S. Lewis',
	'1956',
	['shift', 'puzzle', 'tirian'],
];
let [title, author, year, [a, b, c]] = book;
console.log(title, author, year, a, b, c);
 */

// TASKS
const user = {
	firstName: 'Bikram',
	country: 'Nepal',
	todos: {
		num1: 'Keep learning',
		num2: 'Apply for jobs',
	},
};

let {
	firstName,
	country,
	todos,
	todos: { num1, num2 },
} = user;
console.log(firstName, country, num1, num2);

const objects = ['books', 'films', 'smartphone', ['random', 'values', 'added']];

let [c, b, cs, [r, , a]] = objects;

console.log(r, a);
