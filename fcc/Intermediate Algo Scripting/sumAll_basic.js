function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

/*
Firstly, we create a variable called sortedArr which sorts it from the lowest to the highest value.
firstNum is equal to the first number and lastNum is equal to the second number.
Next, using the Arithmetic Progression summing formula we let sum equal (lastNum - firstNum + 1) * (firstNum + lastNum) / 2.
Finally, we return sum.
*/
