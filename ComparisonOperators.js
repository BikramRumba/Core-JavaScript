/* // JS comparison operators
// 1. Relational --> Compare values in relation to one another
// 2. Abstract (or loose) --> Check to see if the values are the same
// 3. Strict --> Check to see if the values are the same AND the same type

let x = 7;
//1. Relational
//  > more than sign
console.log(x > 10, x > 6);

//  >= more than sign
console.log(x >= 10, x >= 7);

//  < more than sign
console.log(x < 10, x < 6);

//  <= more than sign
console.log(x <= 10, x <= 7);

// 2.Abstract
//  == equal to
console.log(x == 7, x == 6);

//  !=  not equal to
console.log(x != 7);

// 3. Strict
// ==== strict equality
let y = '7';
console.log(x === 7, x === y); // x===y is false because y is a string.

// !== strict not equal to
console.log(x !== y);

// comparison in Strings
console.log('A' < 'Z');

let a = 'Time';
let b = 'Timing';

console.log(a > b, 'e' > 'i');
 */

let a = 10;
let b = 15;
console.log(a > b);

console.log(a == '10'); // it willl return true because value is 10

//strict equality with data type and value
console.log(a === '10'); // it will return false this time.

//  if x is equal to '5' and y is equal to 6, what would be the result of x !==y?
let x = '5';
let y = 6;
console.log(x !== y);
