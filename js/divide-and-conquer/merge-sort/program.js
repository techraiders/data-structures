function mergeSortRecursive (array) {
	// base case
	if (array.length <= 1) return array;

	// divide and conquer!!
	var leftHalf = array.slice(0, array.length / 2);
	var rightHalf = array.slice(array.length / 2);

	var leftSorted = mergeSortRecursive(leftHalf);
	var rightSorted = mergeSortRecursive(rightHalf);

	// merge subarrays
	return merge(leftSorted, rightSorted);
}

function mergeSortIterative (array) {
	// create array of subarrays with each element
	var splitArr = array.map(function  (element) {
		return [element];
	});

	// While there is more than one subarray
	while (splitArr.length > 1) {
		var result = [];
		// merge adjacent
		for (var i = 0; i < splitArr.length; i+=2) {
			// for pairs merge
			if (splitArr[i+1]) result.push(merge(splitArr[i], splitArr[i+1]));
			// for last odd element, just add to results
			else result.push(splitArr[i]); 
		}
		// overwrite old splitArr
		splitArr = result;
	}
	return splitArr[0];
}

function merge (left, right) {
	var result = [], iLeft = 0, iRight = 0;

	// While result is not fully populated
	while (result.length < (left.length + right.length)) {
		// if all elements in left have been added, then add remaining right element
		if (iLeft === left.length) result = result.concat(right.slice(iRight));
		// if all elements in right have been added, then add remaining left elements
		else if (iRight === right.length) result = result.concat(left.slice(iLeft));
		// compare elements is subarrays and add lower of the two to the result
		else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
		else result.push(right[iRight++]);
	}
	return result;
}

