const validAnagram = (first, second) => {
   // compares frequency of elements in two inputs
    if (first.length === second.length) {
        const frequency = {};
        for (let char of first) {
            frequency[char] ? frequency[char]++ : frequency[char] = 1;
        }

        for (let char of second) {
            if (frequency[char]) {
                frequency[char]--;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

validAnagram(``, ``); // true
validAnagram(`aaz`, `zza`); // false
validAnagram(`anagram`, `nagaram`); // true
validAnagram(`rat`, `car`); // false
validAnagram(`awesome`, `awesom`); // false
validAnagram(`qwerty`, `qeywrt`); // true
validAnagram(`texttwisttime`, `timetwisttext`); // true
