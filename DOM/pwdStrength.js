let pwd = document.getElementById("pwd");
let submit = document.getElementById("butn");
let pStrenghtMsg = document.getElementById("pwdStrength");

submit.addEventListener('click', () => {
    // console.log(pwd.value.length);
    if(pwd.value.length < 8) {
        pStrenghtMsg.innerHTML = "<b>Password length must be greater than 7.</b>"
        pStrenghtMsg.className = "text-danger";
    }
    // console.log((/^[a-zA-Z]+$/).test(pwd.value));
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
    }
});