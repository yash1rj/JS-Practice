// The built-in function setTimeout uses callbacks. Creating a promise-based alternative.

// The function delay(ms) should return a promise. 
// That promise should resolve after ms milliseconds, so that we can add .then to it.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("running after 3 seconds"));