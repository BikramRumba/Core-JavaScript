/* 
For loop is used to loop over a piece of code a set number of times.
It is made up of:
1.The initialiser
2. The Condition
3.The Final Expression
*/

// for ([initialiser]; [condition]; [finalExpression]) {
//     console.log();
// }

// for (let num = 0; num <= 10; num++) {
// 	console.log(num);
// }

// const characters = ['Sonic', 'Tails', 'Mario', 'Luigi'];

// let para = document.querySelector('p');
// let info = `The characters are `;

// for (let i = 0; i < characters.length; i++) {
// 	if (i === characters.length - 1) {
// 		info += `and ${characters[i]}.`;
// 	} else {
// 		info += `${characters[i]},`;
// 	}
// }
// // inner text used on writing the text in DOM
// para.innerText = info;

// TASKS

let colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

for (let color = 0; color < colors.length; color++) {
	console.log(`${colors[color]} is my fav color!`);
}
