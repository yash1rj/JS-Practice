let strInput = "Albert Einstein was born in Ulm, on 14/03/1879."

let dtInStr = strInput.match(/(\d{2}[\/]){2}(\d){4}/);

console.log(dtInStr[0]);