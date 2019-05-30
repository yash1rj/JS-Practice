function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}

steamrollArray([1, [2], [3, [[4]]]]);

/*
First we turn the array to a string, which will give us a string of numbers seperated 
by a comma, double comma if there was an empty array and literal object text if there was 
an object, which we can fix it later in our if statement.
We replace the double comma with one, then split it back into an array.
map through the array and fix object values and convert string numbers to regular numbers.
*/
