/* 2 Solutions */

/*  Solution #1 

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}
*/

/* Solution #2 */

function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

/*
First sort the array in ascending order, this is currently done using array functions for minimal footprint.
Once the array it is sorted, we directly apply the .findIndex() where we are going to compare every element 
in the array until we find where num <= currNum meaning where the number we want to insert is less or equal 
to the current number number in the iteration.
Then we use ternary operations to check whether we got an index returned or -1. We only get -1 when the index 
was not found meaning when we get a false for all elements int he array, and for such case, it would mean 
that num should be inserted at the end of the list hence why we use arr.length.
*/
