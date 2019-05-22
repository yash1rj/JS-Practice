function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");

/*
A new string allChars is created.
Create a regular expression notChars which selects everything except str.
The for loop is used to add all the letters in the range to allChars.
match() is used to strip off the str letters from the newly created string and it is returned.
If there are no missing characters, return undefined.
*/
