'use strict';

var Stack = function  () {
  this.storage = '';
};

Stack.prototype.push = function  (val) {
  this.storage = this.storage + '***' + val;
  return this.storage.length;
};

Stack.prototype.pop = function  () {
  // slice off the last item
  var lastItem = this.storage.slice(this.storage.lastIndexOf('***') + 3);
  // updating the storage stack without the last item
  this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
  return lastItem;
};

Stack.prototype.size = function  () {
  
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');

myWeeklyMenu.push('BuleBeans');

console.log(myWeeklyMenu.pop());


console.log(myWeeklyMenu);