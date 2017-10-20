'use strict';

function Stack (capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Please remove before adding new one.';
};

Stack.prototype.pop = function  () {
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

Stack.prototype.peek = function  () {
  return this._storage[this._count - 1];
};

Stack.prototype.count = function  () {
  return this._count;
};

function Queue_TwoStack (capacity) {
  this._stackIn = new Stack(capacity);
  this._stackOut = new Stack(capacity);
}

Queue_TwoStack.prototype.enqueue = function (value) {
  return this._stackIn.push(value);
};

Queue_TwoStack.prototype._transferStack = function  () {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStack.prototype.dequeue = function  () {
  if (this._stackOut.count() === 0) this._transferStack();
  return this._stackOut.pop();
};

Queue_TwoStack.prototype.count = function () {
  return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStack.prototype.peek = function () {
  if (this._stackOut.count() === 0) this._transferStack();
  return this._stackOut.peek();
};

var myQueue_TwoStacks = new Queue_TwoStack (3);
console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
console.log(myQueue_TwoStacks.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue_TwoStacks.dequeue(), 'should be a');
console.log(myQueue_TwoStacks.count(), 'should be 2');
console.log(myQueue_TwoStacks.peek(), 'should be b');
console.log(myQueue_TwoStacks.count(), 'should be 2');