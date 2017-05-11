function LinkedList() {
  var ll = this;
  ll.head = null;
  ll.tail = null;
}

function Node(value, next, prev) {
  var node = this;
  node.value = value;
  node.next = next;
  node.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

var ll = new LinkedList();

/*ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);*/

LinkedList.prototype.addToTail = function(value) {
  var ll = this;
  var newNode = new Node(value, null, ll.tail);
  if (ll.tail) ll.tail.next = newNode;
  else ll.head = newNode;
  ll.tail = newNode;
};

var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

console.log('Head value: ' + myLL.head.value);
console.log('Next value :' + myLL.head.next.value);
console.log('Tail value :' + myLL.tail.value);
