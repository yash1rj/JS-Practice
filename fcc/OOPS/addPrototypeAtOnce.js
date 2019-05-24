function Dog(name) {
    this.name = name; 
}

// There is one crucial side effect of manually setting the prototype to a new object. 
// It erases the constructor property!

Dog.prototype = {
    // Add your code below this line
    constructor: Dog,   // define the constructor property
    numLegs: 2,
    eat: function(){
        console.log('nom nom nom');
    },
    describe: function(){
        console.log("My name is " + this.name);
    }
}

let beagle = new Dog("rocky");

beagle.describe();

console.log(beagle.constructor);
// will print [Function: Object] if constructor is not defined on changing the prototype

// When defined it should print [Function: Dog]