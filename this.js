/* Four Ways 'This' can be defined 
1. The global object
2.As a method within an object
3. As a constructor of a function or class
4. As  a DOM event handler

*/

//window object by default
// console.log(this);

// alert('hello'); and window.alert('hello') are same thing. Window is a global object

// calling 'this' globally returns window object

// function thisKeyword() {
// 	console.log(this); // It will return the global object
// }
// thisKeyword();

// let game = {
// 	name: 'Sionic the Hedgehog',
// 	platform: 'SEGA',
// 	year: 1991,
// 	release: function () {
// 		// console.log(`This game was released in ${year}`); // It will returns year is not defined
// 		/* here this keyword is bound to our game object
//         In other words this inside of a method
//          remember a method is a the name given to a function inside of an object
//         refers to the object that it's inside of so this is same as game.year / this.year*/
// 		console.log(`This game was released in ${this.year}`); //it will return year
// 	},
// };

// game.release();

// let game = {
// 	name: 'Sonic the Hedgehog',
// 	platform: 'SEGA',
// 	year: 1991,
// 	characters: {
// 		main: 'Sonic',
// 		side: 'Tails',
// 		enemy: 'Robotnik',
// 		list() {
// 			//here this refers to the character object
// 			console.log(this);
// 			console.log(`${this.main}, ${this.side}, ${this.enemy}`);
// 		},
// 	},
// };
// /* In Object, this always refers to the object that the method is created in */

// game.characters.list();

// const button = document.querySelector('button');
// button.textContent = 'Click Me'; //Text content will replace the content.

// button.addEventListener('click', function () {
// 	console.log(this); // In this case, this is reference to the targeted element, in this case button is the targeted element
// });

// TASKS

let book = {
	title: 'JavaScript',
	author: 'Dreamer',
	info() {
		console.log(`${this.title} by ${this.author}`);
	},
};
book.info();

const user = {
	name: 'John',
	age: 25,
	career: {
		employer: 'Google',
		title: 'Developer',
		//function inside the object is called as a methods.
		info() {
			// It will return undefined for this.name because this is refering to the career object inside the info methods
			console.log(`${this.name} is a ${this.title} at ${this.employer}`);
			// We can fix the issue by calling user object
			console.log(`${user.name} is a ${this.title} at ${this.employer}`);
		},
	},
};
user.career.info();
