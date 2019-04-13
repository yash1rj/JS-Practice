// ES6: Compare Scopes of the var and let Keywords

// When you declare a variable with the var keyword, it is declared globally, 
// or locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features. 
// When you declare a variable with the let keyword inside a block, statement, or expression, 
// its scope is limited to that block, statement, or expression.

// For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

// With the var keyword, i is declared globally. So when i++ is executed, 
// it updates the global variable. This code is similar to the following:

var numArray2 = [];
var i2;
for (i2 = 0; i2 < 3; i2++) {
  numArray.push(i);
}
console.log(numArray2);
// returns [0, 1, 2]
console.log(i2);
// returns 3

// This behavior will cause problems if you were to create a function and 
// store it for later use inside a for loop that uses the i variable. 
// This is because the stored function will always refer to the value of the updated global i variable.

var printNumTwo;
for (var i3 = 0; i3 < 3; i3++) {
  if(i3 === 2){
    printNumTwo = function() {
      return i3;
    };
  }
}
console.log(printNumTwo());
// returns 3

// As you can see, printNumTwo() prints 3 and not 2. 
// This is because the value assigned to i was updated 
// and the printNumTwo() returns the global i and not the 
// value i had when the function was created in the for loop. 
// The let keyword does not follow this behavior:

'use strict';
let printNumThree;
for (let i4 = 0; i4 < 3; i4++) {
  if (i4 === 2) {
    printNumThree = function() {
      return i4;
    };
  }
}
console.log(printNumThree());
// returns 2
// console.log(i4);
// returns "i is not defined"

// i is not defined because it was not declared in the global scope. 
// It is only declared within the for loop statement.
// printNumTwo() returned the correct value because three 
// different i variables with unique values (0, 1, and 2) were 
// created by the let keyword within the loop statement.

function checkScope() {
    "use strict";
    let i5 = "function scope";
    if (true) {
        let i5 = "block scope";
        console.log("Block scope i is: ", i5);
    }
    console.log("Function scope i is: ", i5);
    return i5;
}

console.log(checkScope());