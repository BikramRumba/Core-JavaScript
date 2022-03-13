// this is written with double question mark ??
// let game; // undefined
// let game2 = null; //null
// let game3 = 'Sonic'; //string

// console.log(game ?? game3);
// //  Nullish operator return the first defined value and that's the major difference between || or and ?? nullish operator
// let user;
// console.log(user ?? 'Guest'); // or returns the first truthy value

// let score = 0; // this is a falsy value
// console.log(score || 'no score registered');
// console.log(score ?? 'no score registered');

// TASKS
let course; //undefined
let c = 'JavaScript';
console.log(course ?? 'Please select a course');
console.log(c ?? 'Please select a course');

let courseProgress = 0;
console.log(courseProgress ?? 'Start the course');
