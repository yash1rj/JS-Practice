function gcd(x, y) {    // Implements the Euclidean Algorithm
  if (y === 0)
    return x;
  else
    return gcd(y, x%y);
}

function smallestCommons(arr) {
  var range = [];
  
  arr.sort(function(a, b) {
    return b - a;
  });
  
  for (var i = arr[0]; i >= arr[1]; i--) {
    range.push(i);
  }
  
  // console.log(range);
  
  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
}

// test here
console.log(smallestCommons([1,5]));
