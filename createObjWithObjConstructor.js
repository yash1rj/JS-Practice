// Syntax:
// var obj = new Object([value]);
// obj.prop1 = "value1";
// obj.prop2 = value2;
// obj.prop3 = "value3";

// This object constructor creates an object wrapper for the [value] passed
// If the [value] passed is empty, null or undefined this object constructor creates an empty object and returns the same
// If [value] is passed, then it creates and returns an object of value type
// It also allows the addition of properties for the objects created

var emp_one = new Object();
emp_one.name = "John";
emp_one.empNumber = 1001;
emp_one.emailId = "John@dev.com";
emp_one.empDetails = function(){
    // code goes here
    console.log(`${this.name} with Employee id : ${this.empNumber} is a DEV.`)
}; 

emp_one.empDetails();

// Another example
var obj = new Object(true);
console.log(obj);