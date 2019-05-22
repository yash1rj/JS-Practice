function fearNotLetter(str) {
  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);
    // console.log(code);
    if(code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code-1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
