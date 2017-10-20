'use strict';

var Stack = function  () {
  this.storage = '';
};

Stack.prototype.push = function  (val) {
  this.storage = this.storage + val;
  return this.storage.length;
};

Stack.prototype.pop = function  () {
  var lastCharacter = this.storage.charAt(this.storage.length - 1);
  this.storage = this.storage.slice(0, -1);
  return lastCharacter;
};

Stack.prototype.size = function  () {
  
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');

var r = myWeeklyMenu.pop();
console.log(r);

console.log(myWeeklyMenu);