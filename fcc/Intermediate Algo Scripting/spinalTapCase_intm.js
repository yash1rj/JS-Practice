function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');

/*
Similar to the first solution, the first replace() puts a space before any encountered 
uppercase characters in the string str so that the spaces can be replaced by dashes later on.
Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() 
on the regular expression /(?:_| )+/ and join()-ed on -.
*/
