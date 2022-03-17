/* Arrow Functions
     They were first introduced with the ES6  update(2015), they 
     provide a new and shorter way to write anonymous function
     expressions and are always anonymous
    */

// function sum(a, b) {
// 	return console.log(a + b);
// }
// sum(5, 43);

// const sum2 = (x, y) => {
// 	return console.log(x + y);
// };
// sum2(5, 43);

//  Arrow function does not have a this binding like other functions

/* Arrow function is determined by the surrounding scope  or the lexical environment
 */

// TASKS

const user = (name) => console.log(`my name is ${name}`);
user('Bikram');

const greeting = () => console.log(`Hello, How are you`);
greeting();

let book = {
	title: 'The Fellowship of the Ring',
	related: ['The Two Toweres, The Return of the King'],
	showRelated: function () {
		this.related.forEach((relatedBooks) => {
			console.log(`Title: ${this.title}`);
			console.log(`Related books: ${relatedBooks}`);
		});
	},
};

book.showRelated();
