const maxSubArraySum = (arr, num) => {
   // find the sub array of the given size whose sum of element is the greatest number.
   if (arr.length >= num) {
    
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
       
    let currentSum = sum;       
    for (let i = num; i < arr.length; i++) {
        currentSum += arr[i] - arr[i-num];
        sum = Math.max(sum, currentSum);
    }
    return sum;
   } else {
       return null;
   }
};

maxSubArraySum([1,2,5,2,8,1,5],2);

// [1,2]
// [2,5]
// [5,2]
// [2,8]
// [8,1]
// [1,5]
