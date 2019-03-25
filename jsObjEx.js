var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

let propVals ="";

for(let property in student) {
    propVals += student[property];
    propVals += ", ";
}

console.log(propVals);