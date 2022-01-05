/*
Define a function that takes in two non-negative integers a and b and 
returns the last decimal of digit of a power b. 
Note that a and b may be very large!

For example, the last decimal digit of 9 power 7 is 9, since pow(9,7) =4782969
The last decimal digit of pow(pow(2,200),300), which has over 10 on 92 decimal digits,
is 6. Also, please take pow(0,0) to be 1.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
*/
var lastDigit = function(str1, str2) {
	if (str2 === '0') {
		return 1;
	}
	let a = parseInt(str1[str1.length - 1]);
	let b = a;

	let carry = Array.from(str2)
		.map(Number)
		.reduce((acc, n) => (acc * 10 + n) % 4, 0);
	// 	console.log(a + ' prvi, ' + b + ' drugi, ' + carry + ' carry');

	for (let i = 1; i < carry; i++) {
		a = (a * b) % 10;
	}
	return a;
};

console.log(
	lastDigit(
		'3715290469715693021198967285016729344580685479654510946723',
		'68819615221552997273737174557165657483427362207517952651'
	)
);
