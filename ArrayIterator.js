/*  Array iterate methods is used to iterate or loop over at array
 values and perform some sort of an action of each those values
 */

//  forEach() method.
// let supers = [
// 	'Superman',
// 	'Batman',
// 	'Flash',
// 	'Aquaman',
// 	'Wolverin',
// 	'Cyclops',
// 	'Professor x',
// ];

// supers.forEach(function (value, index, array) {
// 	// console.log(` The index of ${value} is ${index}`);
// 	console.log(array);
// });

/* map() method is used to create new array without affecting original array
 */
// function upperCase(value) {
// 	return value.toUpperCase();
// }

// let supersCap = supers.map(upperCase);
// console.log(supersCap);
// console.log(supers);

// let numbers = [1, 2, 3];
// function double(x) {
// 	return x * 2;
// }

// let doubleN = numbers.map(double);
// console.log(doubleN);
// let x = numbers.map((n) => n * 2);
// console.log(x);

/* filter() methods filter out the array, so it takes each value inside of our array
and then applies conditional statement to it if it's true the
value gets added to the new array, it won't affect original array */

// let numbers = [1, 2, 4, 5, 56, 6755, 65, 64, 64, 7, 6, 54, 6, 56, 565, 6];
// let evenNumbers = numbers.filter(function (value, index, array) {
// 	return value % 2 === 0;
// });
// console.log(evenNumbers);

// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

/* reduce() methods. it iterate through each values inside the array to reduce
the array down to a single value. It can be used in a strings, array, and other data types.
But it's most frequently used on numbers on the reduce.
It takes four parameters.

*/

// let numbers = [1, 2, 4, 5, 56, 6755, 65, 64, 64, 7, 6, 54, 6, 56, 565, 6];

// function add(total, value, index, array) {
// 	return total + value;
// }
// let sum = numbers.reduce(add);
// console.log(sum);

// let sum = numbers.reduce((total, num) => total + num);
// console.log(sum);

/* some() methods. It iterates over our array to check if the given condition is
  true for at least one of the values if it is it returns true but
  if no values passes it returns the  false
  some() methods didn't create array but it returns boolean statement whether
  it is true or false.
   */

// let numbers = [1, 2, 44, 5, 2];

// let higherThanTen = numbers.some(function (value) {
// 	return value > 10;
// });
// console.log(higherThanTen);

// let newNumber = numbers.some((num) => num > 10);
// console.log(newNumber);

/* every () methods */

// let numbers = [1, 3, 4, 4, 5, 5, 6];
// let allHigherThan = numbers.every(function (value) {
// 	return value > 4;
// });
// console.log(allHigherThan);

// let greaterThanFive = numbers.every((num) => num > 4);
// console.log(greaterThanFive);

/* find() methods */
// let supers = [
// 	'Superman',
// 	'Batman',
// 	'Flash',
// 	'Aquaman',
// 	'Wolverin',
// 	'Cyclops',
// 	'Professor x',
// ];

// let findSuper = supers.find(function (value) {
// 	return value === 'Thor';
// });
// console.log(findSuper);

// let finder = supers.find((value) => value === 'Aquaman');
// console.log(finder);

/* findIndex() method, it is like a find() method the only difference is that findIndex() methods returns
the position of value (index) instead of the value */

// let supers = [
// 	'Superman',
// 	'Batman',
// 	'Flash',
// 	'Aquaman',
// 	'Wolverin',
// 	'Cyclops',
// 	'Professor x',
// ];

// let findSupers = supers.findIndex(function (value) {
// 	return value === 'Wolverin';
// });
// console.log(findSupers);

// let finder = supers.findIndex((value) => value === 'Flash');
// console.log(finder);

// TASKS

const fruits = ['apple', 'orange', 'banana'];

// let inFruits = fruits.forEach(function (value, index, array) {
// 	return alert(`  ${index} - ${value}`);
// });
// console.log(inFruits);

let fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

let containMoreThanThree = fruits.every((fruit) => fruit.length > 3);
console.log(containMoreThanThree);

let numbers = [3, 5, 4, 7, 7, 3, 6, 7, 9];

let oddNumbers = numbers.filter((n) => n % 2 === 0);
console.log(oddNumbers);
