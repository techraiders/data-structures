function transpose (array1, result) {
	var size = array1.length;
	for (var r = 0; r < size; r++) {
		for (var c = 0; c < size; c++)
			result[r][c] = array1[c][r];
	}
}

var input = [
	[1,1,1,1],
	[2,2,2,2],
	[3,3,3,3],
	[4,4,4,4]
];

var output = [
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null]
];

transpose(input, output);

console.log(output);