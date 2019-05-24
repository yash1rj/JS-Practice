// There is a special constructor property located on the object instances.There

// the constructor property is a reference to the constructor function that created the instance.

// The advantage of the constructor property is that it's possible 
// to check for this property to find out what kind of object it is.
// Here's an example of how this could be used:

function Dog(name) {
    this.name = name;
}
  
// Add your code below this line
function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}

let beagle = new Dog("lopo");
let gshephard = new Dog("bruno");
let terrier = {
    name: "rocky"
}

console.log(joinDogFraternity(beagle));
console.log(joinDogFraternity(gshephard));
console.log(joinDogFraternity(terrier));