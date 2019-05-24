function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");

// name and numLegs are called own properties, because they are defined directly on the instance object. 
// That means that duck and canary each has its own separate copy of these properties.

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for(let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);