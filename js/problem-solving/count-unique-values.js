const uniqueValues = (arr) => {
    // arr needs to be a sorted array
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            continue;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    return ++i;
};

uniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]);
