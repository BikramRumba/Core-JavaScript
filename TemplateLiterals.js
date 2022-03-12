/* let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + 'was released by' + platform + 'in the year' + year + '.';

// template literal also called string literals
// template literal is useful for string concatenation, multiline strings we don't need to use \n for new line.
//It also make embedded expressions a lot easier

let info2 = `${title} was released 
by ${platform}
 in the year ${1991}. `;
console.log(info);
console.log(info2);

let num1 = 10;
let num2 = 5;
let sum = `The total is ${num1 + num2}`;
console.log(sum);
 */

// TASKS
let firstName = 'Bikram';
let course = 'JavaScript';
let channel = 'Dev Dreamer';

let info = ` ${firstName} is learning ${course} with ${channel}.`;
console.log(info);
