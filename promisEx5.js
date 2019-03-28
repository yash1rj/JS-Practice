// simplifying chaining of promise with async-await

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

async function getTotal() {
    let fData = await bookFlight();
    let tData = await bookHotel(fData);
    console.log("Total price is : "+tData);
}

getTotal();