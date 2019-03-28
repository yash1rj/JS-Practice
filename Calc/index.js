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
        if ((/([0-9]+)/).test(opr1.value)) {
            throw new Error("Operand 1 should be a numerical value");
        }
        else if ((/([0-9]+)/).test(opr2.value)) {
            throw new Error("Operand 2 should be a numerical value");
        }
    }
    catch(error) {
        console.log(error.message);
    }
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
})

