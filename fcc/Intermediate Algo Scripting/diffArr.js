function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var a1 = arr1.filter((i) => {
    return arr2.indexOf(i) === -1;
  });
  var a2 = arr2.filter((i) => {
    return arr1.indexOf(i) === -1;
  });
  newArr = [...a1, ...a2];
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
