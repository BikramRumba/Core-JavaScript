// function test() {
// 	return 'hello';
// 	return 'gooodbye'; // unreachable code detected
// }

// console.log(test());

let login = function (password) {
	if (password === 'test123') {
		return 'Successfully logged in';
	} else {
		return 'Password incorrect, please try again';
	}
};

let result = login('test124');
console.log(result);

// TASKS
function favNum(num) {
	return `My fav number is ${num}`;
}
let number = favNum(4);
console.log(number);

function password(a) {
	if (a.length > 8) {
		return console.log(`You chose ${a}`);
	} else {
		return console.log(`Not enough letters`);
	}
}

password('PurpleRhino123');
password('Circle77');
