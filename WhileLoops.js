/* Like for loops, 
it also take 
Initialiser, condition, and final expression  */

// let i =[initialiser];

// while ([condition]) {
// 	console.log(i);
// 	i++; [final Expression]
// }

// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

// let color = 0;
// while (color < colors.length) {
// 	console.log(`${colors[color]}`);
// 	color++;
// }

// DO WHILE

// let i = 0;

// do {
// 	console.log(`The number is ${i}`);
// 	i++;
// } while (i <= 10);

/* When we supposed to used a FOR loop as opposed to a while loop
or do While loop? 
--> Genereal rule of thumb that we should follow as to which loop we should
be using and when,
    we should use a for loop when we know ahead of time the number of loops or iterations 
    that we require, and
    we use a while or do while loop when the number of iterations is not known ahead of time.
###Example case;
For loop: we know the length of array so number of iterations are known ahead. Also in gaming application we give 3 times to play. so
we can iterate that for 3 times using for loops.
WHILE LOOP: we use this loop to iterated based upon the user's input now we don't know the number of iterations
needed ahead of time. It all depends on the user's input. 

 Difference between a while loop and do while loop is, with a do while loop the code is
 run at least once before on to testing the condition.

 */

//  TASKS

let x = 0;
while (x <= 100) {
	console.log(`The speed of the car is ${x} MPH `);
	x += 10;
}

// Making sure to execute the code at least once before testing the condition
let a = 1;
let b = 10;
do {
	console.log(a);

	a++;
} while (a <= b);
