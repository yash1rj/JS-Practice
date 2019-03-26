function display(value) {
    console.log(value);
}

function goTrip(callback) {
    setTimeout(function() {
        callback("Let's go to Goa!");
    }, 1500);
}

goTrip(display);