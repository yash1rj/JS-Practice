var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

promise1 = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
    request.open('GET', url);
    request.send();
    console.log("NASA " + request.readyState);
    request.onreadystatechange = () => {
        console.log("NASA " + request.readyState);
    if (request.readyState === 4) {
        //console.log(request.response);
        console.log("Response from NASA API: " + request.status);
        resolve("NASA wins the race!");
        }
    }
})

promise2 = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = 'https://api.github.com/users/mralexgray/repos';
    request.open('GET', url);
    request.send();
    console.log("GITHUB " + request.readyState);
    request.onreadystatechange = () => {
        console.log("GITHUB " + request.readyState);
    if (request.readyState === 4) {
        //console.log(request.response);
        console.log("Response from GITHUB API: " + request.status);
        resolve("GITHUB wins the race!");
        }
    }
});

Promise.race([promise1, promise2]).then((message) => {
    console.log(message);
})