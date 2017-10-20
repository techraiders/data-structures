'use strict';

function Stack (capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

// O(1)
Stack.prototype.push = function  (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

// O(1)
Stack.prototype.pop = function  (value) {
  if (this._count === 0) {
    return 'No element inside the stack. Add element before poping.';
  }

  var value = this._storage[--this._count];
  delete this._storage[this._count];

  if (this._count < 0) {
    this._count = 0;
  };
  return value;
}

// O(1)
Stack.prototype.peek = function  () {
  return this._storage[this._count - 1];
}

// O(1)
Stack.prototype.count = function  () {
  return this._count;
}

// var myStack = new Stack(3);
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'should be Max capacity reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.count(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.count(), 'should be 2');


// Implements a min stack
function MinStack (capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

// O(1)
MinStack.prototype.push = function  (value) {
  if (this._count < this._capacity) {
    
    // Determines the lower value and sets at
    // the top of the Stack of min property. 
    if (this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }

    // stores the value in the MinStack
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

// O(1)
MinStack.prototype.pop = function  () {
  this._min.pop();
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

// O(1)
MinStack.prototype.peek = function  () {
  return this._storage[this._count - 1];
}

// O(1)
MinStack.prototype.count = function  () {
  return this._count;
}

// O(1)
MinStack.prototype.min = function  () {
  return this._min.peek();
}

var minstack = new MinStack(5);
console.log(minstack);

minstack.push(1);
minstack.push(3);
minstack.push(2);
