function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1,5]);

/*
Because of the possibility of the smallest common denominator being among the two biggest numbers, 
it makes sense to check those first, so sort the array.
Create a new array to sort all the numbers, newArr.
Use a descending for loop (var i = arr[0]; i >= arr[1]; i--) to add the numbers from the biggest to the smallest in the new array.
Declare the variables for the quotient so we can access them outside the loop:

the quotient that’ll be our smallest common multiple (quot)
the loop number we’re checking (loop)
the index of the array of numbers (n)
Use a do whileloop to check what we need whilen is not the same length as the new array.
In the do part, we are going to multiply the very first number, times the number of loops, 
times the second number (quot = newArr[0] * loop * newArr[1];).
The loop part will allows us to increase the number we’re checking beyond the greatest number 
we have without having to change the algorithm.
We enter a for loop that will go from n being 2 and going up by one (loop++) while it is smaller 
than the array with all the numbers (n < newArr.length).
If the quotient does not divide evenly (quot % newArr[n] !== 0), then stop the loop (break;). 
If it is even, then check for the next elements (n++) in the array until it is not even or we find our answer.
Outside the loop, increase the value of loop (loop++).
At the end of the loop return the quotient (return quot;).
Note: If the array only has two elements, then the for loop never gets used and the return value is the product of said numbers.
*/
