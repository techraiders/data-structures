function Node (value) {
	this.next = null;
	this.value = value;
}

function LinkedList (headValue) {
	if (headValue === undefined) console.log('Must provide value for first node');
	this.head = new Node(headValue);
	this.tail = this.head; // because we start with linkedlist of one node, tail also points to head
}

LinkedList.prototype.forEach = function (callback) {
	var node = this.head;
	while (node) {
		callback(node.value);
		node = node.next;
	}
};

LinkedList.prototype.print = function  () {
	var result = [];
	this.forEach(function (value) {
		result.push(value);
	});
	return result.join(', ');
};

LinkedList.prototype.insertAfter = function  (node, value) {
	// get reference to former next
	var oldNext = node.next;
	// create new node
	var newNext = new Node(value);
	// store it as the new next
	node.next = newNext;//
	// set next for the new node to be the old next
	newNext.next = oldNext;
	// if reference node is tail, set tail to newNext
	if (this.tail === node) this.tail = newNext;
	return newNext;

	/* OR
		var newNode = new Node(val);
		newNode.next = node.next;
		node.next = newNode;
	*/
};

LinkedList.prototype.removeAfter = function node (node) {
	
};