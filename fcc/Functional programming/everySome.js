function checkPositive(arr) {

    // Some
    return arr.some((elem) => elem > 0);

    // Every
    // return arr.every(val => val > 0);

}
  
console.log(checkPositive([1, 2, 3, -4, 5]));