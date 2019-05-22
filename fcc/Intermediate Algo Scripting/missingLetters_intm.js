// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");

/*
First we define variables to store the character code for the first letter in the string, 
and to store whatever missing letters we may find.
We turn the string to an array in order to map through it instead of using for and while loops.
As we map through our letters’ character codes, we go comparing with the one that should be in that position.
If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
If there are no missing characters, return undefined.
*/
