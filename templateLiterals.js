// A template is a preset format.
// A literal is a value written exactly as it’s meant to be interpreted.

const str1 = 'hello world';
const str2 = "hello world";
const str3 = `hello world`;

console.log(str1);
console.log(str2);
console.log(str3);

// String Concatenation

var p = {
    name: 'Alfred',
    nn: 'Alfy',
};

console.log('Hi, I\'m ' + p.name + '! Call me "' + p.nn + '".');

console.log(`Hi, I'm ${p.name}! Call me "${p.nn}".`);

// STRING CONCATENATION
console.log('Three plus six is ' + (3 + 6) + '.');
// TEMPLATE LITERALS
console.log(`Three plus six is ${3 + 6}.`);

// Line Breaks

// STRING CONCATENATION
console.log("Dear Mom,\n" + 
"Hope you are well.\n" + 
"\tLove, your son");

// TEMPLATE LITERALS
console.log(`Dear Mom,
Hope you are well.
    Love, your son`);

// That’s because, with template literals, 
// all new line characters, tabs, spaces, etc. inserted in the source become a part of the string.

