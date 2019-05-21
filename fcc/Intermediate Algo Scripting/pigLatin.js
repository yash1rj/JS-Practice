/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  if(/[aeiou]/i.test(str[0])) {
    // console.log(str[0]);
    str += "way";
  }
  else {
    // console.log("consonant");
    var str1 = str.split(/[a|e|i|o|u|A|E|I|O|U]/);
    // console.log(str1[0]);
    str = str.replace(str1[0], "");
    str += str1[0] + "ay";
  }
  return str;
}

console.log(translatePigLatin("glove"));
