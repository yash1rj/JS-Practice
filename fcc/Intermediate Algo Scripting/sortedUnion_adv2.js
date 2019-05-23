function uniteUnique(...arrays) {

  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
We first use concat() with an empty array as a starting point and 
the spread operator ... to create an array out of the Arguments object and to flatten it at the same time
then we use the new ES2015 Set object to store only unique values
*/
