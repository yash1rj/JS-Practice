inputString = "thequickbrownfoxjumpsoverthelazydog";
resStr = "";
remChar = "u";

for (let i=0; i<inputString.length; i++) {
    if (inputString[i] !== "u") {
        resStr += inputString[i]
    }
}

console.log(resStr);

// removing repeated characters
function remStr(incoming) {
    return incoming.split("").filter((item, position, self) => {
        return self.indexOf(item) == position;
    }).join("");
}

console.log(remStr(inputString));