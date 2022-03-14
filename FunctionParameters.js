// function favGame(game) {
// 	console.log(`My favourite game is ${game}`);
// }

// // chess is an argument
// favGame('chess');
// favGame('Sonic 2');
// favGame('Fallout 3');

// function ninjaTurtle(name, weapon) {
// 	console.log(`${name} uses the ${weapon}`);
// }

// ninjaTurtle('Donatello', 'Bo Staff');
// ninjaTurtle(); // if function misses the argument then JS will set it to undefined

/* function add(num1, num2) {
	console.log(num1 + num2);
}

add(4, 5);
add(4, 5, 6, 6, 6);// it will add 4 +5 because it takes first 2 parameters
add('4', '5');
add(); // undefined + undefined NaN
add(4); // 4 + undefined will return NaN in this case
 */

// function add(num1, num2) {
// 	console.log(arguments[4]);
// }
// add(2, 4, 54, 453, 54, 5, 5);

// Modern rest parameters does return an array.

// function favGame(game = 'No game provided') {
// 	console.log(`My Favourite game is ${game}`);
// }
// favGame();
// favGame('Chess');

function favGame(game) {
	if (game === undefined) {
		console.log('Please provide your fav game! eg. favGame("Super Mario")');
	} else {
		console.log(`My fav game is ${game}`);
	}
}
favGame();
favGame('Chess');

/*  We can make our functions more dynamic by passing parameters */

// TASKS
function favFood(response) {
	if (response === undefined) {
		console.log(`Please enter your favourite food! `);
	} else {
		console.log(`Your favourite food is ${response}.`);
	}
}
favFood('Wings');
favFood();
