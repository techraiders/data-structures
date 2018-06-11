function binarySearch (list, value) {
  // initial values for start, middle and end
  var start = 0,
      stop = list.length - 1,
      middle = Math.floor((start + stop) / 2);
    
  // While the middle is not what we're looking for and
  // the list does not have a single item
  while (list[middle] !== value && start < stop) {
      if (value < list[middle]) {
        stop = middle - 1;
      } else {
        start = middle + 1;
      }
    
      // recalculate middle on every iteration
      middle = Math.floor((start + stop) /2);
    }
    
    // if the current middle item is that we're looking for return its index,
    // else return - 1
    return (list[middle] !== value) ? -1 : middle;
}

var list = [2,5,8,9,13,45,67,99];
console.log(binarySearch(list, 99));
