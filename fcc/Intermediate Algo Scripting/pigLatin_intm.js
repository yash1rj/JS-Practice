function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");

/*
This is a declarative as well as recursive approach to this problem.
check() is a function which checks for first letter of string to be in the array of vowels, ['a','i','u','e','o'].
In case of consonants, check() calls itself on the next characters until finding the first vowel.
It’ll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville’s would be 3.
Then, letters up until that index are removed from the string and concatenated with either that same chunk of 
removed string or w accordingly, and then ay regardless.
*/
