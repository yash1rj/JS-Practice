var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

let propVals ="";
let cnt = 0;

for(let property in student) {
    cnt += 1;
    propVals += student[property];
    if (Object.keys(student).length != cnt ) {
        propVals += ", ";
    }
}

console.log(propVals);