// A JavaScript function to reverse a number

function revNum(num) {
    let num1 = String(num);
    let rnum = "";
    for(let i=num1.length; i>0; i--) {
        rnum+=i;
    }
    return rnum;
}

// Another way
function rev_a_num(n) {
    n+="";
    return n.split("").reverse().join("");
}

console.log(revNum(1234));

console.log(rev_a_num(4321));