function petTypes() {
    var url = "./pets.json";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
        document.getElementById("petKinds").innerText = xhr.responseText;
    }

    xhr.send();
}