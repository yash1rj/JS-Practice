//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for(var i=0; i<contacts.length; i++) {
        var noContact = 1;
        if (contacts[i].firstName == name) {
            noContact = 0;
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }
    if(noContact) {
        return "No such contact";
    }
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry","likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));