function display(value) {
    console.log(value);
}

function goTrip() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Let's go to Goa!");
        }, 2000);
    });
}

var val = goTrip();

display(val);