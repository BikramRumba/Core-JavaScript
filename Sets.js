/* Sets and Weak sets */

/* Advantages of sets by default sets guard against potential duplicate 
values whereas arrays do not.
Deleting array by value is very slow it requires the use of the splice method
whereas SETS allowed us to delete elements by using the actual value.
AND Identifying the element exists inside a collection is also easier and quicker
by using a set
*/
// const fruits = new Set();

// fruits.add('apple');
// fruits.add('banana');
// fruits.add('orange');

// fruits.add('plum').add('pear').add('apricots');
// // By default sets guard against the duplicate value
// fruits.add('apple');
// console.log(fruits);

// fruits.delete('orange');
// console.log(fruits);
// // identifying the elements in the set

// let check = fruits.has('grapes');
// console.log(check);
// console.log(fruits.size);

// fruits.clear();
// console.log(fruits);

// let arrayFruits = [
// 	'apple',
// 	'banana',
// 	'orange',
// 	'plum',
// 	'peach',
// 	'strawberry',
// 	'raspberry',
// ];

// const fruits = new Set(arrayFruits);
// console.log(fruits);

/* Weak sets can take only non-primitive data types */

// let nums = [1, 2, 45, 6, 8, 8];
// let regularSet = new Set(nums);
// console.log(regularSet);
// let weak = new WeakSet();
// weak.add(nums);
// console.log(weak);

const kombat = new Set();

kombat.add('Scorpion').add('Sub-Zero').add('Reptile').add('Liu Kang');
// for (character of kombat) {
// 	console.log(character);
// }

kombat.forEach((character) => console.log(character));
