function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newarr = [];

  let flatter = (i) => {
    if(!Array.isArray(i)) {
      // console.log(i);
      newarr.push(i);
    }
    else {
      for (var a in i) {
        flatter(i[a]);
      }
    }
  }
  
  arr.forEach(flatter);
  return newarr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
