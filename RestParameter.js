/* Rest Parameter uses the same syntax as the spread operator.
Rest Parameter bundles arguments together into an array so whereas the spread 
pulled out or spread the values. It is opposite to the spread operator*/

// function sum(a, b, c) {
// 	return console.log(a + b + c);
// }
// sum(1, 34, 4, 5, 5, 5, 56, 6, 6); // it will retun 39 taking only 3 arguments and ignore the rest of arguments
/*  We need REST paramenters when we need our function call to be 
dynamic and we don't how many arguments that it will take*/

// function restParams(...x) {
// 	//return console.log(x);// array created by rest params storing value in array
// 	return console.log(...x); // spread of the array. Taking out the value from the array
// }

// restParams(1, 3, 5, 6, 5);

// TASKS
function colours(...z) {
	return console.log(z[1]);
}

colours('Red', 'Green', 'Yellow', 'Blue', 'Purple');

function heroes(...c) {
	console.log(...c);
}
heroes('Superman', 'Batman', 'The Hulk', 'Iron man', 'Wolverine');
