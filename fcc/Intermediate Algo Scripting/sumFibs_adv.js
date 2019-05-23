function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
    
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }

    // Sum only the odd numbers and return the value
    return arrFib.reduce((acc, curr) => {
        return acc + curr * (curr % 2);
    });
}

// test here
sumFibs(4);

/*
Create an array of fibonacci numbers till num.
Use reduce() method to find the sum of odd members of array.
Return the sum.
*/
