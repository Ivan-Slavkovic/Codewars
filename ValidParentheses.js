/*

Write a function that takes a string of parentheses, 
and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/

function validParentheses(parens) {
	var count = 0;
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') count++;
		if (parens[i] === ')') count--;
		if (count < 0) return false;
	}
	return count == 0;
}

console.log(validParentheses('())('));
