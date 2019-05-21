function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");

/*
Make an empty string to hold your Pig Latin word.
Assign your appropriate regular expression to a variable.
If the first character is a vowel, just add way to end of string and return it.

If the first character is not a vowel:
    Find number of consonants before first vowel with help of indexOf(), match() and regex.
    Start Pig Latin string with first vowel till the end.
    Add letters before first vowel to end of string.
    substr() is used for string manipulation here.
    Add ay to end of string and return it.
*/
