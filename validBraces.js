/*
Write a function that takes a string of braces, and determines if the order of the braces is valid.
 It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], 
and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
function validBraces(braces) {
	let counter = 0,
		curlyBraces = 0,
		squareBrackets = 0;

	for (let i = 0; i < braces.length; i++) {
		let temp = braces[i];
		switch (braces[i]) {
			case '(':
				counter -= 1;
				break;
			case ')':
				counter += 1;
				break;
			case '[':
				squareBrackets -= 1;
				break;
			case ']':
				squareBrackets += 1;
				break;
			case '{':
				curlyBraces -= 1;
				break;
			case '}':
				curlyBraces += 1;
				break;
		}
	}
	if (counter === 0 && squareBrackets === 0 && curlyBraces === 0) return true;
	return false;
}

console.log(validBraces('[(])'));
