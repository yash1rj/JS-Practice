/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  let asum = 0;
  let sarr = [...arr].sort((a,b) => {
    return a-b;
  });
  for(let i=sarr[0]+1; i< sarr[1]; i++) {
    asum += i;
  }
  return asum+arr[0]+arr[1];
}

console.log(sumAll([1, 4]));
