//chaining promises

function bookFlight() {
    return new Promise((resolve) => {
        setTimeout(resolve(5600),2000);
    })
}

function bookHotel(flightPrice) {
    return new Promise((resolve) => {
        setTimeout(resolve(7000+flightPrice),1000);
    })
}

bookFlight()
    .then( (flightData) => { return bookHotel(flightData) })
    .then( (cumulativeData) => { console.log("This is "+cumulativeData) })