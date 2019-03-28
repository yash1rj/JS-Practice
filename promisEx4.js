// rejected chained promises

function bookFlight(airLine) {
    return new Promise((resolve, reject) => {
        if (airLine == "AirIndia") {
            setTimeout(resolve(5600),2000);
        }
        else {
            reject(Error("Flight can't be booked!"));
        }
    })
}

function bookHotel(flightPrice) {
    return new Promise((resolve) => {
        setTimeout(resolve(7000+flightPrice),1000);
    })
}

bookFlight("indigo")
    .then( (flightData) => { return bookHotel(flightData) })    // the promise returned by 1st then will throw error
    .then( (cumulativeData) => { console.log("This is "+cumulativeData) })
    .catch( e => console.log(e.message) )