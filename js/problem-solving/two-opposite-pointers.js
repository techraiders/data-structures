const sumZero = (arr) => {
    let left = 0, right = arr.length -1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum < 0) {
            left++;
        } else if (sum > 0) {
            right--;
        } else {
            return [arr[left], arr[right]];
        }
    }
};

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]); // [-3, 3];
