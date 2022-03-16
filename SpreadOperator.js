/* What is the Spread Operator?
--> The spread operator allows objects and iterables to be unpacked (or spread out!)
into individuals values. We write the spread operator with three dots
and it can be used in three different ways:
1) Arrays 2) Objects 3) Functions

*/
// let nums = [1, 2, 3];
// let letters = ['a', 'b', 'c'];
// let myArray = [...nums, ...letters, 4, 5, 6];
// console.log(myArray);
// let a = [...nums];
// console.log(a);
// Spread operators are immutable
// push methods and unshift methods changes the original array but spread operator creates new array/ copy
// const characters = [
// 	{ id: 1, name: 'Sonic' },
// 	{ id: 2, name: 'Mario' },
// 	{ id: 3, name: 'Likn' },
// ];

// const newCharacter = {
// 	id: 4,
// 	name: 'Donkey Kong',
// };
// const updatedCharacters = [...characters, newCharacter];
// characters.push(newCharacter);
// characters.unshift(newCharacter);
// console.log(characters);
// console.log(updatedCharacters);

/* Object case */
// const car = {
// 	make: 'Honda',
// 	model: 'Accord',
// 	year: 2022,
// 	features: {
// 		brake: 'ABS',
// 		emission: 'Manual',
// 	},
// };

// const newCar = {
// 	...car,
// 	body: 'Sedan',
// 	features: {
// 		...car.features,
// 		drive: 'All wheel',
// 	},
// };
// console.log(car);
// console.log(newCar);

/* Functions... */
// function multiplication(a, b, c) {
// 	return console.log(a * b * c);
// }
// const nums = [4, 7, 8];
// multiplication(...nums);
// TASKS

const colours = ['Red', 'Green', 'Blue'];

let newColours = [...colours, 'Yellow', 'Purple', 'black'];
console.log(newColours);

//  It we used the pop() method on our original array it will remove the last element of original array
//  However, it won't make any changes in new array newColours

const user = {
	name: 'John',
	age: 25,
	occupation: {
		role: 'Developer',
	},
};
let description = {
	...user,
	occupation: {
		...user.occupation,
		stack: 'MERN',
	},
};

console.log(description);

const movie = ['Jumanji', 1995];
function movieInfo(name, year) {
	return console.log(`The  movie ${name} was released in ${year}`);
}
movieInfo(...movie);
