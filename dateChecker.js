console.log("Correct date format: MM-DD-YYYY");

let dinp1 = "03-18-2018"; //valid
let dinp2 = "19-12-2018";  //invalid
let dinp3 = "25-1-2018"; //invalid

function checkDate(date) {
    // date format length
    if (date.length != 10) {
        return false;
    }
    else {
        if (((Number(date.substring(0,2)) > 0) && (Number(date.substring(0,2)) < 13)) && ((Number(date.substring(3,5)) > 0) && (Number(date.substring(3,5)) <= 31))) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log("User input: "+dinp1)
console.log(checkDate(dinp1));

console.log("User input: "+dinp2)
console.log(checkDate(dinp2));

console.log("User input: "+dinp3)
console.log(checkDate(dinp3));