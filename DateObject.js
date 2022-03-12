/* let currentDate = new Date();
console.log(currentDate.getFullYear());

// JavaScript understands the date based upon a timestamp. And timestamp is specified as the number of milliseconds
// based on unix time or epoch time
let milliSeconds = new Date();

let dateString = new Date('Aug 29, 2019 08:34:00');
// console.log(dateString);

let componentDate = new Date(1999, 11);
console.log(componentDate);

console.log(currentDate.getTime());

// currentDate.setFullYear(1997);
// console.log(currentDate.getFullYear());

// month and days are stored as a number, for instance, sunday = 0 and January = 0
console.log(
	currentDate.toLocaleString('default', { month: 'long', weekday: 'long' })
);
 */
// TASKS
let date = new Date();
console.log(date.getDate());

let hour = date.getHours();
let min = date.getMinutes();

console.log(`${hour}:${min}`);

let day = date.toLocaleString('default', { weekday: 'long' });
console.log(day);
