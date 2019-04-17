// ES6: Use Destructuring Assignment to Assign Variables from Arrays
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

const [x, y] = [1, 2, 3, 4, 5, 6];
console.log(x, y); // 1, 2

// The variable x is assigned the first value of the array, and y is assigned the second value of the array.

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let q = 8, w = 6;
(() => {
    "use strict";
    // change code below this line
    [q,w] = [w,q];
    // change code above this line
})();

console.log(q); // should be 6
console.log(w); // should be 8