function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

mutation(["hello", "hey"]);

/*
Grab the second string, lowercase and turn it into an array; 
then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using 
indexOf on the first string. indexOf will give you -1 if the current letter is missing. 
We check that not to be the case, for if this happens even once every will be false.
*/
