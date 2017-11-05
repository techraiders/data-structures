'use strict';

function product (array1, array2, result) {
	for (var r = 0; r < array1.length; r++) {
		for (var c = 0; c < array2.length; c++) {
			result[r][c] = 0;
			for (var k = 0; k < result.length; k++)
				result[r][c] += array1[r][k] * array2[k][c];
		}
	}
}

var arr1 = [
	[1,1,1,1],
	[2,2,2,2],
	[3,3,3,3],
	[4,4,4,4]
];


var arr2 = [
	[1,1,1,1],
	[2,2,2,2],
	[3,3,3,3],
	[4,4,4,4]
];

var result = [
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null]
];

product(arr1, arr2, result);
console.log(result);