// What are some simple, native JS methods/expressions/operations?

arr.push(); // O(1)
arr.pop(); // O(1);
1 + 3 // O(1)
for (...) {} // O(n)
arr.unshift(); // O(n)

for (var i...) { O(n)
	1 + 1; // O(1)
}

for (var i...) { O(n)
	for (var j...) { O(n) | O(n) * O(n)
		3 + 3; O(1) | O(1) + O(1)
		5 + 6; O(1)
	}
} O(n^2) * O(2) // constant time is minimal in comparison of big input size, so ignored; final time complexity is: O(n^2)

// O(n)
var countChars = function  (str) {
	var count = 0; // constant
	for (var i = 0; i < str.length; i++) {
		count++; //constant
	}
	return count; // constant
};
countChars('dance');
countChars('walk');

// O(1)
var countChars = function  (str) {
	return str.length;
};
countChars('dance');
countChars('walk');