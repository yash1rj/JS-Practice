function isPrime(n) {
  if(n <= 1) { 
    return false;
  }
  if(n == 2) {
    return true;
  }
  if((n > 2) && (n % 2 === 0)) {
    return false;
  }
  
  let max_div = Math.floor(Math.sqrt(n)) 
  for(let i=3; i <= max_div; i+=2 ) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let psum = 0;
  for(let j=1; j <= num; j++) {
    // console.log(j, isPrime(j));
    if(isPrime(j)) {
      psum += j;
    }
  }
  return psum;
}

console.log(sumPrimes(10));
