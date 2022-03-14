/* Q. What are Functions Expressions?
Answer: Functions Expressions are functions which are created
inside an expression or inside another syntax construct. 
 */

/* It's use case would be when we want to refer to the function
from within the function itself (recursion).
 */
let games = function () {
	console.log('Chess');
};
//games();

let anotherWay = games; // It will work as well
anotherWay();

/* Difference between function declaration and function expression are,
function declaration can be invoked earlier than they created
however function expression can not. */

myFunc();

function myFunc() {
	console.log('My Function Declaration');
}

// It won't work in function expression
/* x();

let x = function myFunc() {
	console.log('expression');
};
 */

// TASKS
let colours = function () {
	console.log('red, green and blue');
};
colours();
let myColours = colours;
myColours();
