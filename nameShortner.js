inName = "Ram Krishna Narayan";

inSplit = inName.split(" ");

shortName = "";

for(let i=0; i<inSplit.length-1; i++) {
    shortName += inSplit[i].substring(0,1);
    shortName += ". ";
}

shortName += inSplit[inSplit.length-1];

console.log(inName+" got converted to "+shortName);