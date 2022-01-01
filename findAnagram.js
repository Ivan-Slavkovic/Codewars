// function anagrams(word, words) {
// 	let newStr1 = word.replace(/[^a-z]/g, '').split('').sort(); //...
// 	let newStr2 = words.replace(/[^a-z]/g, '').split('').sort();

// 	return newStr1 === newStr2;
// }
// //anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// console.log(anagrams('abba', [ 'aabb', 'abcd', 'bbaa', 'dada' ]));

function anagrams(strs) {
	var result = [];
	if (strs == null || strs.length == 0) return result;

	var map = {};
	for (var i = 0; i < strs.length; i++) {
		var arr = strs[i].split('');
		arr.sort();
		var t = arr.join('');
		if (map[t] == null) {
			var l = [];
			l.push(i);
			map[t] = l;
		} else {
			map[t].push(i);
		}
	}

	for (var l in map) {
		if (map[l].length > 1) {
			for (var i = 0; i < map[l].length; i++) {
				result.push(strs[map[l][i]]);
			}
		}
	}

	return result;
}

console.log(anagrams([ 'my', 'ym', 'name', 'mane', 'sriniv' ]));
