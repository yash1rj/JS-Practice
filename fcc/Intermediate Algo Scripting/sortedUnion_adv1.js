function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
Number of arguments can change dynamically, so we don’t need to bother providing 
our function uniteUnique() with arguments at all.
We use a while loop to concatenate all the arguments into one array called concatArr.
We use filter() to remove the duplicate elements by checking the index of each element 
and removing same elements with different positions.
Ordering will be preserved here.
*/
