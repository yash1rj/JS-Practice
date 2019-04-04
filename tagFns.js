// A tagged template (tag function) is what we call syntactic sugar. 
// If you’ve never heard this term before it simply means that it’s syntax 
// that was designed to make things easier to read.

// A tagged template is a function call that uses a template literal from which to get its arguments.

// TAG FUNCTION
//      greet`I'm ${name}. I'm ${age} years old.`

// A tag function is the function name ( greet ) followed by a template literal. 
// Since our tag functions are purely syntactic sugar, using the above tag function, 
// is equivalent to writing this normal function invocation:

// EQUIVALENT FUNCTION
//      greet(["I'm ", ". I'm ", " years old."], name, age)

// Our normal function, greet, takes three parameters:

// The first parameter is an array containing all of the text from our template literal. 
// Between each element in this array is where our variables will go.
// The 2nd to infinity parameters in our function are the variables to be inserted into our tag function.

// So why is this important? A tag function is an easy way to pass a template literal into a function as its arguments.

// Lets now create our greet function and just log out the arguments to make sure everything works as expected:

var name = 'Alfred';
var age = 47;
 
function greet(){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
greet`I'm ${name}. I'm ${age} years old.`;

// the tag function clearly breaks down our template 
// literal into three different properties and inputs them into our greet function. 

var name = 'Alfred';
var age = 47;
function greet(arr, nameArg, ageArg) {
  console.log(arr[0] + nameArg + arr[1] + ageArg + arr[2]);
}
greet`Woah, ${name} is ${age}?`;

// Pretty cool huh? When we invoke the greet function we pass in our template literal as the sole argument. 
// The Tag functions breaks down our template literal into three separate arguments. 
// The first argument is an array of our plain text. 
// The remaining arguments are the template literal expressions in the order they appear. 
// We can then access and arrange all of these arguments to produce the desired thread! 
// In this case we sandwich our arguments in the middle of our array and viola — we log our text out to the console.

// Better yet, if we had an array of objects with names and ages, we could loop through and log them all. 
// This is where the real power of tag functions comes in handy:

const people = [
    {name: 'Alfred', age: 47},
    {name: 'George', age: 27},
    {name: 'Regina', age: 31},
    {name: 'Trisha', age: 30}
  ]
  function greet(arr, n, a) {
    console.log(arr[0] + n + arr[1] + a + arr[2]);
  }
  people.forEach((p) => {
    greet`Woah, ${p.name} is ${p.age}?`;
  });