// For...in Loops, it will be useful to iterate through objects

// let character = {
// 	name: 'Sonic',
// 	color: 'blue',
// 	speed: 1000,
// 	// name, color, speed are the keys and sonic, blue, 1000 are the values respectively
// };

// for (let x in character) {
// 	console.log(`${x}`);
// 	console.log(`${x}: ${character[x]}`);
// }

// const salaries = {
// 	Peter: 24000,
// 	James: 34000,
// 	John: 50000,
// };

// for (let i in salaries) {
// 	let salary = `$${salaries[i]}`;
// 	console.log(`${i} earns ${salary}  per year`);
// }

// let character = {
// 	name: 'Sonic',
// 	color: 'blue',
// 	speed: 1000,
// };

// character.name = 'Knuckles';
// //deleting property from object
// delete character.speed;
// // adding property to object
// character.alignment = 'Good';
// Object.defineProperty(character, 'name', {
// 	value: 'Tails', //  what is the value of the Propert?
// 	enumerable: false, // will property show up in for in loop?
// 	configurable: false, // can property be deleted?
// 	writable: false, // can propert be changed?
// });
// console.log(character);

/* when for...in loop iterates over enumerable properties of an object 
we mean a property that has its enumerable attribute set to true // by default they 
are set to true
*/
// for (x in character) {
// 	console.log(`${x}: ${character[x]}`);
// }

// TASKS

let house = {
	type: 'Detached',
	build: 'brick',
	year: 2019,
	price: 250000,
	driveway: true,
};

for (let property in house) {
	console.log(`${property}: ${house[property]}`);
}
