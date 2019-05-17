function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");

/*
The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

Lowercase the whole string using str.toLowerCase().

Replace every word’ first character to uppercase using .replace.

Search for character at the beginning of each word i.e. matching any character following a space or 
matching the first character of the whole string, by using the following pattern.

Regex explanation:

Find all non-whitespace characters (\S)

At the beginning of string (^)

Or after any whitespace character (\s)

The g modifier searches for other such word pattern in the whole string and replaces them.
*/
