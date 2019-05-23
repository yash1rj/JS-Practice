function fibonacci_series(n) {
  const result = [0, 1];
  for (var i = 2; i <= n; i++) {
    result.push(result[i-2] + result[i-1]);
  }
  // console.log(result);
  return result;
}

function sumFibs(num) {
  let fibsum = 0;
  let fibarr = [];
  fibarr = fibonacci_series(num).filter((i) => {
    // console.log(i);
    if(i <= num && i % 2 !== 0) {
      fibsum += i;
      // console.log(`fibsum ${fibsum}`);
      return true;
    }  
  });
  // console.log(fibarr);
  return fibsum;
}

console.log(sumFibs(4));
