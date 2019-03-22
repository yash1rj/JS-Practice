inputString = "thequickbrownfoxjumpsoverthelazydog";
resStr = "";
remChar = "u";

for (let i=0; i<inputString.length; i++) {
    if (inputString[i] !== "u") {
        resStr += inputString[i]
    }
}

console.log(resStr);