let submit = document.getElementById("submission");

function enable() {
    submit.disabled = "";
}

function disable() {
    submit.disabled = "disabled";
    submit.style.cursor = "not-allowed";
}