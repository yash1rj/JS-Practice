function truthCheck(collection, pre) {
  // Is everyone being true?
  let temp = 0;
  collection.forEach((i) => {
    // console.log(i.hasOwnProperty(pre));
    if(i.hasOwnProperty(pre) === false) {
      temp = 1;
    }
    else {
      // console.log(i[pre]);
      if(i[pre] === 0 || i[pre] === false || i[pre] === null || i[pre] === "" || i[pre] === undefined || Number.isNaN(i[pre])) {
        temp = 1;
      }
    }
  });
  if(temp === 1) {
    return false;
  }
  else {
    return true;
  }
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
