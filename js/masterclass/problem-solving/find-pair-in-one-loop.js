/**
 * Finds a pair of two numbers in an array that add up to a target value.
 *
 * @param {number[]} nums - An array of numbers to search in.
 * @param {number} target - The target value to find the pair of numbers that add up to.
 * @returns {number[] | null} - An array containing the indices of the two numbers
 *                              that add up to the target, or null if no such pair is found.
 */
const findTwoNumbers = (nums, target) => {
  console.clear();
  const hashMap = {};
  for (let index = 0; index < nums.length; index++) {
    const currentMapValue = hashMap[nums[index]];
      if (currentMapValue >= 0) {
          return [currentMapValue, index];
      } else {
          const numberToFind = target - nums[index];
          hashMap[numberToFind] = index;
      }
  }
  return null;
};

findTwoNumbers([1,7,9,2,15], 11);
