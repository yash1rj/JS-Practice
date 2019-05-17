function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*
First we need an if-statement to test if the length of the full string passed in as the first argument 
already fits within the size limit passed in as the second argument. 
If so we can just return the string that was passed in.

if (str.length <= num) return str;

If our if statement above fails, we move to the else, where we are going to return a “slice” of the string. 
The slice method extracts a section of a string and returns a new string. Here we pass 0 as the starting point for our slice. 
To determine the endpoint, we use a ternary operator: num > 3 ? num - 3 : num. 
In our ternary, if num is larger than 3, we must factor in the three dots to our total length, 
and thus we end our slice at num-3. If num is less than or equal to 3, our slice gets an end variable of just num. 
Finally, the '...' is appended to the end of our new string and is returned.

} else { return str.slice(0, num > 3 ? num - 3 : num) + ’…’; }
*/
