/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
function add(a, b) {
	const aLength = a.length;
	const bLength = b.length;
	const max = Math.max(aLength, bLength);

	let carry = 0,
		sum = '';

	for (let i = 1; i <= max; i++) {
		let x = +a.charAt(aLength - i);
		let y = +b.charAt(bLength - i);

		let t = carry + x + y;
		carry = (t / 10) | 0;
		t %= 10;

		sum = i === max && carry ? carry * 10 + t + sum : t + sum;
	}

	return sum;
}

console.log(add('12345', '1232345'));
