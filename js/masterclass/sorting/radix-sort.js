const countDigits = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = nums => {
  // returns the maximum number of digits a number in the input array has.
  let maxDigits = 0;
  for (let index = 0; index < nums.length; index++) {
      maxDigits = Math.max(maxDigits, countDigits(nums[index]));
  }
  return maxDigits;
};

const getDigit = (num, i) => {
// returns the digit present at the place specified, checking right to left;
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const radixSort = nums => {
  // Time Complexity: O(nk)
console.clear();
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({length: 10}, () => []);
      for (let index = 0; index < nums.length; index++) {
          let digit = getDigit(nums[index], k);
          digitBuckets[digit].push(nums[index]);
      }
      console.log(digitBuckets);
      nums = [].concat(...digitBuckets);
      console.log(nums);
  }
return nums;
};

radixSort([23,345,5467,12,2345,9852]);
