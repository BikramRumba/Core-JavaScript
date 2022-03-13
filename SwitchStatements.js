/* Quality that is being tested for here is strict equality  */

// let roll = 4;
// switch (roll) {
/* It will return the number 4 is not possible. Because we declare
varible roll assigning value 4 (number) but in our switch statement case '4' is the string case. SO, quality
is being tested for here is strict equality. */
// 	case 1:
// 		console.log('You rolled a 1');
// 		break;
// 	case 2:
// 		console.log('You rolled a 2');
// 		break;
// 	case 3:
// 		console.log('You rolled a 3');
// 		break;
// 	case '4':
// 		break;

// 	case 5:
// 		console.log('you rolled a 5');
// 		break;
// 	case 6:
// 		console.log('you rolled a 6');
// 		break;
// 	default:
// 		console.log(`The number ${roll} is not possible`);
// }

// let today = new Date().toLocaleString('default', { weekday: 'short' });

// switch (true) {
// 	case today === 'Mon':
// 		console.log(`Today is ${today}`);
// 		break;
// 	case today === 'Tue':
// 		console.log(`Today is ${today}`);
// 		break;
// 	case today === 'Wed':
// 		console.log(`Today is ${today}`);
// 		break;
// 	case today === 'Thurs':
// 		console.log(`Today is ${today}`);
// 		break;
// 	case today === 'Fri':
// 		console.log(`Today is ${today}`);
// 		break;
// 	case today === 'Sat':
// 		console.log(`Today is ${today}`);
// 		break;
// 	case today === 'Sun':
// 		console.log(`Today is ${today}`);
// 		break;
// 	default:
// 		console.log('No idea!!');
// }

// TASKS
let favFood = 'Steak';

// switch (true) {
// 	case favFood === 'Chicken':
// 		console.log(`That's right! ${favFood} is  my favourite!`);
// 		break;
// 	case favFood === 'Noodles':
// 		console.log(`That's right! ${favFood} is  my favourite!`);
// 		break;
// 	case favFood === 'Salad':
// 		console.log(`That's right! ${favFood} is  my favourite!`);
// 		break;
// 	case favFood === 'Steak':
// 		console.log(`That's right! ${favFood} is  my favourite!`);
// 		break;
// 	case favFood === 'Tacos':
// 		console.log(`That's right! ${favFood} is  my favourite!`);
// 		break;
// 	default:
// 		console.log(`${favFood} not found...I'm hungry`);
// break;
// }

switch (favFood) {
	case 'Chicken':
		console.log(`That's right! ${favFood} is  my favourite!`);
		break;
	case 'Noodles':
		console.log(`That's right! ${favFood} is  my favourite!`);
		break;
	case 'Salad':
		console.log(`That's right! ${favFood} is  my favourite!`);
		break;
	case 'Steak':
		console.log(`That's right! ${favFood} is  my favourite!`);
		break;
	case 'Tacos':
		console.log(`That's right! ${favFood} is  my favourite!`);
		break;
	default:
		console.log(`${favFood} not found...I'm hungry`);
		break;
}
