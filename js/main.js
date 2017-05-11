function LinkedList() {
  var ll = this;
  ll.head = null;
  ll.tail = null;
  console.log(ll);
}

function Node(value, next, prev) {
  var node = this;
  node.value = value;
  node.next = next;
  node.prev = prev;
  console.log(node);
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
