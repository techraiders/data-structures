const merge = (first, second) => {
  const merged = [];
  let firstPointer = 0, secondPointer = 0;

  while (firstPointer < first.length && secondPointer < second.length) {
      if (first[firstPointer] <= second[secondPointer]) {
          merged.push(first[firstPointer])
          firstPointer++;
      } else {
          merged.push(second[secondPointer]);
          secondPointer++;
      }
  }
  while (firstPointer < first.length) {
      merged.push(first[firstPointer]);
      firstPointer++;
  }
  while (secondPointer < second.length) {
      merged.push(second[secondPointer]);
      secondPointer++;
  }
  return merged;
};

const mergeSort = input => {
  if (input.length < 2) return input;
  let mid = Math.floor(input.length/2);
  let left = mergeSort(input.slice(0, mid));
  let right = mergeSort(input.slice(mid));
  return merge(left, right);
};

mergeSort([1,3,5,7,9,11,13,2,4,6,8,10,12]);
