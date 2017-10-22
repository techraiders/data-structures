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
		Lsorted = mergeSort(L) [34, 83, 10] {2}
		Rsorted = mergeSort(R)
		return merge(Lsorted, Rsorted)

{2} base case: if list.length < 2, return // FALSE
		break the list into halves L & R [34] [83, 10]
		Lsorted = mergeSort(L) [34]
		Rsorted = mergeSort(R) 
		return merge(Lsorted, Rsorted)
/*{3} base case: if list.length < 2, return // TRUE
		break the list into halves L & R
		Lsorted = mergeSort(L)
		Rsorted = mergeSort(R)
		return merge(Lsorted, Rsorted)*/
/* END OF CALL STACK */