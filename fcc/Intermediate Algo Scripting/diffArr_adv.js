function diffArray(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
