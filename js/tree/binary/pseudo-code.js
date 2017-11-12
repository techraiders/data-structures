// Constructor
  // value
  // left
  // right

// Methods
	// insert (value) goal: find its proper place
			// if value < current
			// if (left)	go left
			// else insert
	// if value > current
			// if (right) go right
			// else insert
	// contains
===
bst = BST(11);
{value: 11, left: null, right: null}

bst.insert(15);
{ value: 11, left: null,
	right: {	value: 15, left: null, right: null}
}

bst.insert(7);
{value: 11,
	left: {value: 7, left: null, right: null},
	right: {value: 15, left: null, right: null}
}

bst.insert(5);
{value: 11,
	left: {value: 7,left: {value: 5, left: null, right: null}, right: null},
	right: {value: 15, left: null, right: null}
}

bst.insert(17);
{value: 11,
	left: {value: 7,left: {value: 5, left: null, right: null}, right: null},
	right: {value: 15, left: null, right: {value: 17, left: null, right: null} }
}

/* STACK TRACE */
// if value < current ( 15 < 11 ) i.e false
	// if (left) go left
	  // this.left.insert(value) // 15
	// else insert

// if value > current
	// if (right) go right
	// else insert i.e new tree with value
	// add to current's right

/* STACK TRACE */