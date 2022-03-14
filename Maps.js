/*   Map is a collection of keyed data items similar to object.
Difference between map and a object is that a map allows keys of 
any type.
Object will converts keys to String but map does not.

*/

// Example of Object
// let game = {
// 	name: 'Sonic',
// 	platform: 'SEGA',
// 	year: 1991,
// };
// //  Creating a Map

// let gameMap = new Map();
// // we use set() methods to add the value to a map
// gameMap.set('Name', 'Sonice the Hedgehog');
// gameMap.set(3, 'The number three');
// gameMap.set(true, 'boolean');

// let getInfo = gameMap.get(3);
// let hasInfo = gameMap.has('Name');
// let deleteInfo = gameMap.delete(true);
// // Another difference between Map and Object is, map allows the key of any type
// console.log(gameMap);
// console.log(getInfo);
// console.log(hasInfo); // returns true
// console.log(gameMap.size);

//Another Example
// let game = {
// 	name: 'Sonic',
// 	platform: 'SEGA',
// 	year: 1991,
// };

// let gameMap = new Map();
// gameMap.set('SEGA', 'Sonic the Hedgehog');
// gameMap.set('SNES', 'Super Mario');
// gameMap.set('PS', 'Spyro');

// console.log(gameMap);

// /* We will be iterating through the element */
// // keys()
// for (let key of gameMap.keys()) {
// 	console.log(key);
// }

// // values()
// for (let value of gameMap.values()) {
// 	console.log(value);
// }
// // entries()
// for (let [k, v] of gameMap.entries()) {
// 	console.log(`${k} has the value of ${v}`);
// }

/* Weak Maps. Keys in weak maps must be objects and not primitive values. And it
do not support iterations */

// let weak = new WeakMap();
// weak.set('Name', 'John');
// console.log(weak);

// TASKS FOR THIS LESSON

let countries = new Map();

countries
	.set('Ryu', 'Japan')
	.set('Ken', 'USA')
	.set('Guile', 'USA')
	.set('Blanka', 'Brazil');
console.log(countries);

for (let country of countries.values()) {
	console.log(country);
}

for (let [person, country] of countries.entries()) {
	console.log(`${person} is from ${country}`);
}

for (x of countries) {
	console.log(x);
}
