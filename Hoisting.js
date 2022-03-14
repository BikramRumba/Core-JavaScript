/* Q.What is JS Hoisting?
Answer: Hoisting is JavaScripts default behaviour where variables and 
function declarations are moved to the top of their scope before code execution.

With hoisting only declarations are moved to the top initialisation or
assignments are left in place.

There are two types of Hoisting;
1. Variable Hoisting and
2. Function Hoisting

 */
/* hello();
function hello() {
	console.log('hello');
}
 */
/* Declaration */
// let game;
// console.log(game); //undefined

// /* Initialisation */
// game = 'Super Mario';
// console.log(game); //Super Mario

/* JS Variable LifeCycle
1. Declaration - var author;
2.Initialisation - author = 'C.S. Lewis'
3. Usage - console.log(author)
*/

/* Function Hoisting 
Only declaration function get hoisted
not the initialisation function (expression) */
/* lion('Aslan');
function lion(name) {
	// It will get hoisted
	console.log(`The lions name is ${name}`);
} */
// It will return errror
/* let lion = function (name) {
	console.log(`The lions name is ${name}`);
}; */

/* To hoist something means to lift or pull it up
 And Hoisting in JavaScript is default behavior where variables and function 
 declarations are moved to the top of this gulp before code execution
 */

//  TASKS

/* book('The Magician Nephew');
function book(title) {
	console.log(`The books is called ${title}`);
} */

// How did you fix error?
console.log(book);
let book = 'The Silver Chair';
