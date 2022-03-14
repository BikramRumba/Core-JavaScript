/*  The old 'var' keyword */

// var age = 18;
// var firstName = 'John';
// console.log(`${firstName} is  ${age} years old.`);

/* const refers for constant, so it cannot be reassigned */

/* Major Differences  between var, let and const

Keyword ||   Can Be Reassigned || Can be Redeclared || Scope          || Hoisting
VAR     ||       Yes           || Yes               || Function Scope || Yes
LET     ||       Yes           || No                || Block Scope    || No
CONST   ||     No              || No                || Block Scope    || NO
 */

/* Can be reassigned */
// var game = 'Sonic';
// game = 'Mario';
// console.log(game);

// let game = 'Sonic';
// game = 'mario';
// console.log(game);

// const game = 'Sonic';
// game = 'mario';
// console.log(game); // It will throw an error

/* Use const when you have a variable that you know will never change its value
and for anything else use 'let' */

// TASKS
const currentYear = new Date().getFullYear();
console.log(currentYear);
let username = 'dreamer123';
username = 'believer123';
console.log(username);
