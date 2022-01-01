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
