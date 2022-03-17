/* A pure function is a function that for some given arguments always produces
the same outcome and one that has no side effects (when a function changes
    something outside of itself) */
const sum = (n1, n2) => console.log(n1 + n2);
sum(45, 55);

/* Any functions are called to be pure functions if they do following 2 tasks,
1. It will always return the same thing given specific arguments
 2.This function doesn't change outside of the function
 */

//  IMPURE FUNCTIONS
const randomNum = (num) => console.log(num + Math.random());
randomNum(5);
