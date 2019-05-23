function uniteUnique(...arr) {
  let newArr = [];
  arr.forEach((i) => {
    i.forEach((j) => {
      // console.log(j);
      // console.log(newArr.includes(j));
      if(!newArr.includes(j)) {
        newArr.push(j);
      }
    });
  });
  
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
