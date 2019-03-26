function check(val) {
    console.log(val);
}

function getTrip() {
    setTimeout(function() {
        return "Let's go to trip";
    }, 1500)
}

var value = getTrip();
check(value);