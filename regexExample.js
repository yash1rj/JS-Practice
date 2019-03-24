function validateName(name,pattern) {
    if(name.match(pattern)) {
        console.log("Match found");
    }
    else {
        console.log("Match not found");
    }
}

let name = "Joooohn";
let regex = /J[o]*hn/;

validateName(name,regex);