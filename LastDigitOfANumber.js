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
	let helper1 = str1.split('');
	let helper2 = str2.split('');
	let god = Math.max(helper1.length, helper2.length);
	console.log(helper2);
	for (let i = 0; i < god; i++) {
		add();
	}
};
lastDigit(
	'1606938044258990275541962092341162602522202993782792835301376',
	'2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376'
);
