/* Keep in mind that functions are objects in fact we refer to them as
a first class objects and that basically means that anything that we can do with objects
  we can do with functions
  
  Objects -----------------------------------------        Functions
                        Created Via Literal
  let game = {}  <------------------------------------> function game(){}
                        Stored in variables
  let game = {} <------------------------------------>  let game = function(){}
                            Can Include Values
  let game= {       <------------------------------------> let game= function(){
                                                                        let title: 'Sonic';
                                                                        }
      title:'Sonic';
  }
  
  We can call or invoke a function but not the object
  */

/*  Q. What are JS functions?
  Answer: Functions are block of code that we can call (or correct term is invoke)
  whenever we want. They are known as 'first-class objects', which means they can be 
  treated like objects.
   */

/* There are 4 ways to create a funciton in JavaScript
    1. Function Declaration and Expressions
    2. Arrow Functions // Updated with ES6 
    3. Function constructors //very rarely used
    4. Generator functions // it is complex methods
   */

/* Function Declarations */
// function games() {
// 	console.log('Sonic the Hedgehog');
// 	console.log('Super Mario');
// 	console.log('Donkey Kong');
// }

// we need to invoke or  functions
//games(); // We invoking function manually here.

/*  Big advantage of using a functions anytime we want to run a piece of code,
we don't need to keep rewriting it over and over again. We can simply invoke a function for 
multiple times */

/* Real beauty of function is that we can invoke the function dynamically based upon
user's button clicks or when the page loads, whena a user hovers over an element and much more, 
these are known as events*/

// function games() {
// 	let title = 'Zelda'; // this variable is a local variable,
// 	// local variable are local to this particular function
// 	// local variables are only visible inside the function inside the functions they've been created
// 	console.log(title);
// }

// // we can not use that local variable outside the function
// // console.log(title); // It will through an Uncaught ReferenceError: title is not defined
// games();

/* Declaring a global variables */
// let greeting = 'Hey there!';
// function greet() {
// 	console.log(greeting); // since greeting is a global variable it is accessible globally
// }

// greet();

// Manipulating DOM
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function () {
// 	console.log('Sonic');
// });

// TASKS
function myName() {
	console.log('Bikram Rumba');
}
myName();
myName();
myName();
myName();
