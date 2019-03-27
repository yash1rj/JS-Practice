function goTrip() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Let's go to Goa!");
        }, 2000);
    });
}

goTrip().then(
    function display(value) {
        console.log(value);
    }
);
