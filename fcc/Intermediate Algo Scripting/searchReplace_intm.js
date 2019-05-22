function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/*
In this solution, regular expression [A-Z] is used to check if character is uppercase.
Create a new regular expression object, re.
If first letter of before is capitalized, change the first letter of after to uppercase.
Replace before with after in the string.
Return the new string.
*/
