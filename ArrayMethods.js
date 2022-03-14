/* 
    
*/
// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// Length methods
// console.log(supers.length);

// console.log(supers[supers.length - 1]);

// supers.length = 2;
// console.log(supers);

// supers.length = 3;
// console.log(supers);

// Array methods
// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers);
//index methods
// console.log(supers.indexOf('Flash'));

//include method() and it is case sensitive. It returns boolean value. If it matches returns true else returns False
// console.log(supers.includes('Batman'));

// Pop() methods. It removes the last item
// console.log(supers.pop());

// shift() method removes the first item from the array
// console.log(supers.shift());

// console.log(supers);

/*  pop() and shift() methods are used to remove the item from the array
where pop() removes the last item from the array and shift() removes
the first item from the array */

/* push() and unshift() methods are the opposite of pop() and shif() methods respectively.
push() added item in the the last position of the array and unshift() adds the item in 
the first position of the array */

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];

// supers.push('Spider-Man');
// console.log(supers);
// supers.unshift('Wonder-Woman');
// console.log(supers);

//Concat() methods // it concatenate two arrays by creating new array
// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// let newSupers = supers.concat(['Wolverin', 'Cyclops', 'Professor x']);
// console.log(supers);
// console.log(newSupers);

// join() Methods takes an array and turns into a String

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];

// console.log(supers.join('||'));

// split()method is opposite of join() methods. It takes a string and turns into an array
// let supers = 'Superman, Batman, Flash';
// let supersArray = supers.split(',');
// console.log(supersArray);

// slice methods create a new array spliting the given array based on the indices.
// let supers = [
// 	'Superman',
// 	'Batman',
// 	'Flash',
// 	'Aquaman',
// 	'Wolverin',
// 	'Cyclops',
// 	'Professor x',
// ];
// console.log(supers);
// let xmen = supers.slice(4, 7); //It creates new array taking indexes from 4 to 7
// console.log(xmen);
// console.log(supers); // even after slice, original array remains the same.

/* splice() methods remove and replace the array items. 
splice(indexnumber, how many we want to replace,
     what we want to replace) */
// let supers = [
// 	'Superman',
// 	'Batman',
// 	'Flash',
// 	'Aquaman',
// 	'Wolverin',
// 	'Cyclops',
// 	'Professor x',
// ];
// supers.splice(3, 1, 'Green Lantern');
// console.log(supers);

// We can also added the items to the array without deleting any items using slice methods
//  We will pass second argument as a 0,
// supers.splice(3, 0, 'Green Lantern');
// console.log(supers);

// we can also delete item by using splice() methods,

// supers.splice(3, 1);
// console.log(supers);
/*  We must be careful while using splice() method because it is destructive
it alters our original array */

// revers() method is self explanatory.So, it reverse the array item
// supers.reverse();
// console.log(supers);

//sort() methods
// supers.sort();
// console.log(supers);

// TASKS

let fruits = ['apple', 'orange', 'banana'];
fruits.unshift('cherry', 'pineapple');
console.log(fruits);
fruits.push('plum', 'grapes');
console.log(fruits);
fruits.splice(3, 1, 'lemon');
console.log(fruits);

fruits.sort();
console.log(fruits);
