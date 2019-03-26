let opr1 = document.getElementById("opr1");
let opr2 = document.getElementById("opr2");

let addition = document.getElementById("plus");
let subtraction = document.getElementById("minus");
let multiplication = document.getElementById("multiply");
let division = document.getElementById("divide");

let btn = document.getElementById("calculate");

let ans = document.getElementById("answer");

btn.addEventListener('click', () => {
    if (addition.checked) {
        ans.innerHTML = Number(opr1.value)+Number(opr2.value);
    }
    else if (subtraction.checked) {
        ans.innerHTML = Number(opr1.value)-Number(opr2.value);
    }
    else if (multiplication.checked) {
        ans.innerHTML = Number(opr1.value)*Number(opr2.value);
    }
    else if (division.checked) {
        ans.innerHTML = Number(opr1.value)/Number(opr2.value);
    }
})

