function multiply(multiplier, ...theArgs){
    return theArgs.map((element) => {
        return multiplier * element;
    });
}

myArr = multiply(13,1,2,3,4);
console.log(myArr);