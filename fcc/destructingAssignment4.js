// ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
// In some situations involving array destructuring, we might want to collect the rest of 
// the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// Variables a and b take the first and second values from the array. 
// After that, because of rest operator's presence, arr gets rest of the values in the form of an array.

// The rest element only works correctly as the last variable in the list. 
// As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [x,y,...arr1] = list; // change this
    // change code above this line
    return arr1;
}

const arr1 = removeFirstTwo(source);
console.log(arr1); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];