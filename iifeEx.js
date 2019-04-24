// anonymous function expression
// function (num1, num2) {return num1 + num2 ;}

// IIFE
(function (num1, num2){return num1 + num2;})(100, 200);

// Anoher IIFE Example
var outer = (function () {
    var counter = 0;
    return function () { return counter += 1; }
})();

// var outer = (...an anonymous function...)();

console.log(outer());
console.log(outer());
console.log(outer());