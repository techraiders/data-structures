partition (arr, lo, hi)
	choose last element as pivot

	keep track of index for pivotLoc
	initialized as lo // 0

	for i, loop from low to high
		if current arr[i] <= pivot
			swap current pivotLoc and i
			increment pivotLoc
		else
			save 4 in variable
			swap arr[arr.ln - 1] with arr[i]
			move 5 to 
