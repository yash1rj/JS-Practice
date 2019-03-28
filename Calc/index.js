let opr1 = document.getElementById("opr1");
let opr2 = document.getElementById("opr2");

let addition = document.getElementById("plus");
let subtraction = document.getElementById("minus");
let multiplication = document.getElementById("multiply");
let division = document.getElementById("divide");

let btn = document.getElementById("calculate");

let ans = document.getElementById("answer");

btn.addEventListener('click', () => {
    try {
        if (!opr1.value.match(/^[0-9]+$/)) {
            throw new Error("Operand 1 should be a numerical value");
        }
        else if (!opr2.value.match(/^[0-9]+$/)) {
            throw new Error("Operand 2 should be a numerical value");
        }
        else {
            if (addition.checked) {
                ans.innerHTML = "Answer : ";
                ans.innerHTML += (Number(opr1.value)+Number(opr2.value)).toFixed(3);
                ans.style.backgroundColor = "green";
            }
            else if (subtraction.checked) {
                ans.innerHTML = "Answer : ";
                ans.innerHTML += (Number(opr1.value)-Number(opr2.value)).toFixed(3);
                ans.style.backgroundColor = "green";
            }
            else if (multiplication.checked) {
                ans.innerHTML = "Answer : ";
                ans.innerHTML += (Number(opr1.value)*Number(opr2.value)).toFixed(3);
                ans.style.backgroundColor = "green";
            }
            else if (division.checked) {
                ans.innerHTML = "Answer : ";
                ans.innerHTML += (Number(opr1.value)/Number(opr2.value)).toFixed(3);
                ans.style.backgroundColor = "green";
            }
        }
    }
    catch(error) {
        ans.innerHTML = error.message;
        ans.style.backgroundColor = "red";
        
    }
})

