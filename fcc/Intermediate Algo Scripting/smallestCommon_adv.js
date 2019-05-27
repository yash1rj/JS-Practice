function smallestCommons(arr) {

  // range
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  let smallestCommon = lcm(min, min + 1);

  while(min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }

  return smallestCommon;
}

/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}


// test here
smallestCommons([1,5]);

/*
Extract minimum and maximum from provided arr.
Initialise smallestCommon with the LCM of first two numbers.
Loop through range computing LCM of current LCM and next number in range lcm(a, b, c) = lcm(lcm(a, b), c).
*/
