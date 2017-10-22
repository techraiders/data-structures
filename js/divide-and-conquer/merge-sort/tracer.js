//O(n*logn)
mergeSort(list)
	base case: if list.length < 2, return
	break the list into halves L & R
	Lsorted = mergeSort(L)
	Rsorted = mergeSort(R)
	return merge(Lsorted, Rsorted)
list [34, 83, 10, 9, 1, 4]

/* CALL STACK */
{1} base case: if list.length < 2, return // FALSE
	 	break the list into halves L & R [34, 83, 10] [9, 1, 4]
		Lsorted =  [10, 34, 83]
		Rsorted = mergeSort(R) [9,1,4] -> [1, 4, 9]
		return merge(Lsorted, Rsorted) -> [1 ,4,9, 10, 34, 83]

/*{2} base case: if list.length < 2, return // FALSE
		break the list into halves L & R [34] [83, 10]
		Lsorted = mergeSort(L) [34]
		Rsorted = mergeSort(R) [83, 10]
		// similarly we pass R i.e [83, 10] and it comes back sorted as [10, 83] 
		return merge(Lsorted, Rsorted) [34], [10, 83] -> [10, 34, 83]*/
/* END OF CALL STACK */ 