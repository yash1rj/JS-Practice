let inputString = "woW";

function chkPalin1(incoming) {
    let lowCaps = incoming.toLowerCase();
    let revS = lowCaps.split("").reverse().join("");

    if (lowCaps === revS) {
        return true;
    }
    return false;
}

function chkPalin2(incoming) {
    let lowCaps = incoming.toLowerCase();
    let revS = "";
    for (let i=lowCaps.length-1; i>=0; i--) {
        revS += lowCaps[i];
    }

    if (lowCaps === revS) {
        return true;
    }
    return false;
}

function Palin1(incoming) {
    if (incoming === "") {
        return "";
    }
    else {
        return Palin1(incoming.substr(1)) + incoming.charAt(0);
    }
}

function Palin2(incoming) {
    return (incoming === "") ? "" : Palin2(incoming.substr(1)) + incoming.charAt(0);
}

function chkPalin3(incoming) {
    let lowCaps = incoming.toLowerCase();
    if (lowCaps === inputString.toLowerCase()) {
        return true;
    }
    return false;
}

console.log(chkPalin1(inputString));
console.log(chkPalin2(inputString));
console.log(chkPalin3(Palin1(inputString)));
console.log(chkPalin3(Palin2(inputString)));