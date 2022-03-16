// const game = {
// 	title: 'Sonic the Hedgehog',
// 	year: 1991,
// };

// function info() {
// 	console.log(`${this.title} was released in ${this.year}`);
// 	// console.log(this);
// }

//info(); // It will returned the undefined was released in undefined.
//   To resolve this issue we will use call() methods to use this method from the object
// info.call(game);
// info.apply(game);
/* What is difference between call()  and applY()?
---> When  we want to pass additional arguments inside of our function.
The only difference is that  if we need to pass the arguments in a function, we will pass
argument normally using call( ) methods, and we need to pass as an array in 
apply() methods.
    
*/

// const game = {
// 	title: 'Sonic the Hedgehog',
// 	year: 1991,
// };

// function info(platform, character) {
// 	console.log(`${this.title} was released in ${this.year}, for ${platform}, it featurs
//     the character ${character}`);
// 	// console.log(this);
// }

// info.call(game, 'SEGA', 'Sonic');
// info.apply(game, ['SEGA', 'Sonic']);
// info();
/* In call()  and apply() they are good for one-time uses so in our examples*/

// Bind methods.We can think as a permanent change

// const gameInfo = info.bind(game, 'SEGA', 'Sonic');
// // gameInfo();

// const game2 = {
// 	title: 'Super Mario',
// 	year: 1985,
// };

// gameInfo.bind(game2);
// gameInfo();

// TASKS
const book = {
	title: 'Harry Potter',
	author: 'J.K Rowling',
};
function info(year) {
	console.log(
		`${this.title} was written by ${this.author}, and released in ${year}.`
	);
}
// info.call(book);
// info.apply(book, [1985]);

const bookInfo = info.bind(book, '1985');
bookInfo();
