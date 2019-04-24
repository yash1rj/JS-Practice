let pwd = document.getElementById("pwd");
let cpwd = document.getElementById("cpwd");
let submit = document.getElementById("butn");
let pStrenghtMsg = document.getElementById("pwdStrength");
let pwdConfirm = document.getElementById("pwdConfirm");

submit.disabled = "disabled";

pwd.addEventListener('blur', () => {
    // console.log(pwd.value.length);
    // console.log((/^[a-zA-Z]+$/).test("pwd.value"));
    
    if(pwd.value.length < 8) {
        pStrenghtMsg.innerHTML = "<b>Password length must be greater than 7.</b>"
        pStrenghtMsg.className = "text-danger";
    }
    else if(pwd.value.length >= 8 && (/^[a-zA-Z]+$/).test(pwd.value)) {
        pStrenghtMsg.innerHTML = "<b>Weak Password Strength</b>";
        pStrenghtMsg.className = "text-danger";
    }
    else if(pwd.value.length >= 8 && (/^[a-zA-Z0-9_]+$/).test(pwd.value)) {
        pStrenghtMsg.innerHTML = "<b>Medium Password Strength</b>";
        pStrenghtMsg.className = "text-danger";
    }
    else if(pwd.value.length >= 8 && (/^[a-zA-Z0-9_!@#$%^&*]+$/).test(pwd.value)) {
        pStrenghtMsg.innerHTML = "<b>Strong Password Strength</b>";
        pStrenghtMsg.className = "text-success";
        submit.disabled = "";
    }
});

submit.addEventListener('click', () => {
    if(pwd.value === cpwd.value) {
        pwdConfirm.innerHTML = "<b>Password Matched</b>";
        pwdConfirm.className = "text-success";
    }
    else {
        pwdConfirm.innerHTML = "<b>Password not Matched</b>";
        pwdConfirm.className = "text-danger";
    }
});