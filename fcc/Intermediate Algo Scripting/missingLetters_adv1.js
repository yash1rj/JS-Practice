function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

fearNotLetter("abce");

/*
Loop over the string
Check if the difference in char codes between adjacent characters in the string is more than 1 (chack ASCII table)
Return the missing character ( +1 from where the gap was detected)
*/
