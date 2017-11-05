'use strict';

function add (arr1, arr2, arr3) {
	var r, c;
	for (r = 0; r < arr1.length; r++) {
		for (c = 0; c < arr2.length; c++) {
			arr3[r][c] = arr1[r][c] + arr2[r][c];
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

var arr3 = [
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null]
];

add(arr1, arr2, arr3);

console.log(arr3);