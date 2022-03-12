// ['hey there!', 'Hello again'].forEach(alert);

// this is a single line comment
/* this is a
 multi-line 
comment */

//check if value is an even number. This is a example of bad comments
/* function num(value) {
	if (value % 2 == 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}
num(5); */

function isEven(value) {
	if (value % 2 == 0) {
		console.log('Even Number');
	} else {
		console.log('Odd number');
	}
}

isEven(5);

/**
 *
 * @param {number} num1 | the number to raise
 * @param {number} num2 |the number to be raised by
 * @returns power
 */

function power(num1, num2) {
	return Math.pow(num1, num2);
}

console.log(power(6, 3)); // 6*6*6
