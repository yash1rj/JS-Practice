//parseInt()

console.log(parseInt("5"));     // 5
console.log(parseInt("5.5"));   // 5
console.log(parseInt("5p0"));   // 5
console.log(parseInt("p50"));   // NaN (Not a Number)


//parseFloat()

console.log(parseFloat("1.23"));    // 1.23
console.log(parseFloat(".123"));    // 0.123
console.log(parseFloat("1.23abc")); // 1.23
console.log(parseFloat("a123"));     // NaN