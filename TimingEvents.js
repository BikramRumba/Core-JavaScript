/* setTimeout(
	function sub(channel) {
		console.log(`Subscribe to ${channel}`);
	},
	3000,
	'Dev Dreamer'
);
 */

// function sub(channel) {
// 	console.log(`subscribe to ${channel}`);
// }
// // Clear TimeOut Method  can be written by assigning a variable to the timeout Function
// let timer = setTimeout(sub, 3000, 'Dev Dreamer');

// const clear = () => {
// 	clearTimeout(timer);
// 	console.log(`clearTimeout() stopped the timer`);
// };

// let btn = document.querySelector('button');
// btn.innerHTML = 'Stop Timer';

// btn.addEventListener('click', clear);

// TASKs

/* setTimeout(
	(firstName) => {
		console.log(`My name is ${firstName}`);
	},
	4000,
	'Bikram'
);
 */

/* function info(firstName) {
	console.log(`My name is ${firstName}`);
}
setInterval(info, 1000, 'Bikram');
 */
function count(start, end) {
	let timer = setInterval(() => {
		console.log(start);
		if (start >= end) {
			clearInterval(timer);
		} else {
			start++;
		}
	}, 1000);
}
count(0, 7);
