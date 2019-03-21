// A JavaScript function to reverse a number

function revNum(num) {
    let num1 = String(num);
    let rnum = "";
    for(let i=num1.length; i>0; i--) {
        rnum+=i;
    }
    return rnum;
}

console.log(revNum(1234));