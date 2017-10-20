'use strict';

function Queue (capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

// O(1)
Queue.prototype.enqueue = function  (value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

// O(1)
Queue.prototype.dequeue = function  () {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
}

// O(1)
Queue.prototype.peek = function  () {
  return this._storage[this._head];
}

// O(1)
Queue.prototype.count = function  () {
  return this._tail - this._head;
}

// O(n)
Queue.prototype.contains = function  (value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
}

Queue.prototype.until = function  (value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
  return null;
}

var myQueue = new Queue(3);
console.log(myQueue);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count());
console.log(myQueue.peek());
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue.until('d'), 'should be null');