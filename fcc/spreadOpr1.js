// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in 
// places where multiple parameters or elements are expected.

// The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
console.log(maximus);

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array.

// The spread operator makes this syntax much better to read and maintain.

const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr2); // returns 89
console.log(maximus2);

// ...arr returns an unpacked array. In other words, it spreads the array.

// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
// The following code will not work:

// const spreaded = ...arr; // will throw a syntax error