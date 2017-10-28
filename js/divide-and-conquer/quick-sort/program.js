function quickSort (array, lo, hi) {
	if (lo === undefined) lo = 0;
	if (hi === undefined) hi = array.length - 1;

	if (lo < hi) { // 0 < 4 i.e true
		var p = partition(array, lo, hi);
		quickSort(array, lo, p - 1);
		quickSort(array, p + 1, hi);
	}
	if (hi - lo === array.length - 1) return array;
}

function partition (arr, lo, hi) { // [5,3,1,4,2], 0 4

	var pivot = arr[hi], // 2
			pivotLoc = lo; // 0

	for (var i = 0; i < hi; i++) {
		if (arr[i] <= pivot) {
			swap(arr, pivotLoc, i);
			pivotLoc++;
		}
	}
	swap(arr, pivotLoc, hi);
	return pivotLoc;
}

quickSort([5,3,1,4,2]);

/* STACK TRACE */

quickSort (array, lo, hi) { // array = [5,3,1,4,2]
	if (lo === undefined) lo = 0;
	if (hi === undefined) hi = array.length - 1; // hi = 4

	if (lo < hi) { // 0 < 4; i.e true
		var p = partition(array, lo, hi); // [5,3,1,4,2], 0, 4
		quickSort(array, lo, p - 1);
		quickSort(array, p + 1, hi);
	}
	if (hi - lo === array.length - 1) return array;
}

partition (arr, lo, hi) { // // [5,3,1,4,2], 0, 4
	// pivot is the element that want to have in its final place, after all the swapping happens

	// pivot location is where we are gonna keep track of where the final location should be
	var pivot = arr[hi], // 2
			pivotLoc = lo; // 0

	for (var i = 0; i < hi; i++) { // 0 -> 4
		if (arr[i] <= pivot) { // 5 <= 2 i.e false
			swap(arr, pivotLoc, i);
			pivotLoc++;
		}
	}
	swap(arr, pivotLoc, hi);
	return pivotLoc;
}

/* STACK TRACE */