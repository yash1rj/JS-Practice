/*
Make a function that looks through an array of objects (first argument) and returns an array 
of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.
For example, if the first argument 
is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let a = source;
  var data = JSON.stringify(a);
  data = JSON.parse(data);
  var datakeys = Object.keys(data);
  var datavals = Object.values(data);
  
  collection.forEach((i) => {
    // console.log(i);
    var temp = 1;
    var d = JSON.stringify(i);
    d = JSON.parse(d);
    var dkeys = Object.keys(d);
    datakeys.forEach((j) => {
      // console.log(d[j]);
      // console.log(data[j])
      if(dkeys.indexOf(j) < 0) {
        temp = 0;
      }
      if(d[j] !== data[j]) {
        temp = 0;
      }
    });
    if(temp === 1) {
      //console.log(i);
      //var ival = Object.values(i);
      //datavals.forEach((k) => {
        
      //});
      arr.push(i);
    }
  });
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
