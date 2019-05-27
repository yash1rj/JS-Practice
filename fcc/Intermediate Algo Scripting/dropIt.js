function dropElements(arr, func) {
  // Drop them elements.
  let temp = 0;
  return arr.filter((i) => {
    console.log(i, func(i));
    if(func(i)) {
      temp = 1;
    }
    if(temp === 1) {
      return true;
    }
  });
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
