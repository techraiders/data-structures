// O(n*logn)
Pseudocode: Merge Sort
mergeSort(list)
base case: if list.length < 2, return
break the list into halves L & R
Lsorted = mergeSort(L)
Rsorted = mergeSort(R)
return merge(Lsorted, Rsorted) 

 IN MORE DETAILS
mergeSort(list)
	initialize n to the length of the list // O(1)
	base case is if n < 2, just return // O(1)
	initialize mid to n/2 // O(1)

	left = left slice of array to mid - 1 // N/A
	right = right slice of array to n - 1 // N/A
	mergeSort(left) // n/2
	mergeSort(right) // n/2
	return merge(left, right) // linear

	// f(n) = c1 + n + 2(n/2) + c2
	// f(n) = O(n*logn)