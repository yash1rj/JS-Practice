function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);

/*
Creating a variable sum to store the sum of the elements.
Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.
*/
