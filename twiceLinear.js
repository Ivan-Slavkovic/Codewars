/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the 
ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency
*/

function dblLinear(n) {
	let x = 0,
		temp1 = 0,
		temp2 = 0,
		array = [ 1 ];

	while (temp1 + temp2 < n + x) {
		var y = 2 * array[temp1] + 1;
		var z = 3 * array[temp2] + 1;
		if (y < z) {
			array.push(y);
			temp1++;
		} else if (y > z) {
			array.push(z);
			temp2++;
		} else {
			array.push(y);
			temp1++;
			temp2++;
			x++;
		}
	}
	return array.pop();
}
console.log(dblLinear(10));
