function pairElement(str) {
  let newArr = [];
  let subArr;
  str = str.split("");
  str.forEach((i) => {
    subArr = [];
    // console.log(i);
    if(i === "A") {
      subArr.push(i, "T");
    }
    if(i === "T") {
      subArr.push(i, "A");
    }
    if(i === "C") {
      subArr.push(i, "G");
    }
    if(i === "G") {
      subArr.push(i, "C");
    }
    newArr.push(subArr);
  });
  return newArr;
}

console.log(pairElement("GCG"));
