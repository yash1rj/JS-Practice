function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // return true if it is divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);

/*
The function isPrime checks if a particular number is prime or not.
If num is 1, return 0 since 1 is not a prime number.
If num is not prime, check next number down from maximum number.
If num is prime, add it to next number in the sequence through recursion to sumPrimes function.
*/
