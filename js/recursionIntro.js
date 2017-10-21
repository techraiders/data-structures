'use strict';

// 1. Write a function the loops through the numbers n down to 0. if you haven't done so far try using a while loop to do this.
var countDown = function  (n) {
  while (n > 0 ) {
    console.log(n--);
  }
};

//countDown(9);

// 2. Next, try looping just like above except using recursion
var recursiveCountDown = function  (n) {
  while (n > 0) {
    console.log(n);
    return recursiveCountDown(--n);
  }
};

//recursiveCountDown(9);

// 3. Write a function 'exponent' that takes two argument base, and expo, uses a while loop to return the exponent value of the base.
var exponent = function  (base, expo) {
  var val = base;
  while (expo > 1) {
    val *= base;
    expo--;
  }
  return val;
};
//console.log(exponent(2, 3));

// 4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base
var recursiveExponent = function  (base, expo) {
  if (expo === 1) {
    return base;
  }
  return base * recursiveExponent(base, --expo)
};
//console.log(recursiveExponent(2, 3));

// 5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns
var recursiveMultiplier = function  (arr, num) {
  if (arr.length === 0) {
    return arr;
  }
  var last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);
  return arr;
};
//recursiveMultiplier([1,2,3,4], 2);

// 6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse order.
var recursiveReverse = function  (arr) {
  var reversedArr = [];
  var addItems = function  (orderedArr) {
    if (orderedArr.length > 0) {
      reverseArr.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
  }
  addItems(arr);
  return reversedArr;
};