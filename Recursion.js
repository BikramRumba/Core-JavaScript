/*Recursion  is a function that calss itself inside the function body
and then it's also responsible for stopping itself.
-----> Danger of this functions is if we don't also provide some sort
of condition to stop the function call then we'll be stuck in an infinite loop

 */

// const greeting = () => {
// 	console.log('Hello, world');
// 	greeting();
// };

// greeting(); // It will create infinite loop

/* const countDown = (num) => {
	for (let i = num; i >= 0; i--) {
		console.log(i);
	}
};

countDown(9);
 */

const countDown = (num) => {
	// Log the number
	console.log(num);
	//minus num by 1
	const updatedNum = num - 1;
	// The base case
	if (updatedNum >= 0) {
		countDown(updatedNum);
	}
};
/* Recursive function simply passes along the updated number each time we invoke the function again
so here no extra state is needed*/

countDown(7);
//  TAKE AWAYS
/* Recursive functions are functions that call themselves within the code block,
 we must always specify a goal or rule for stopping that call and this is known as the base case
 otherwise we'll get stuck in an infinite loop
 */

//  TASKS

const counter = (num) => {
	console.log(num);
	let updatedNum = num + 1;
	if (updatedNum <= 10) {
		counter(updatedNum);
	}
};

counter(1);
