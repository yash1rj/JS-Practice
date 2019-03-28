function getTrip(location) {
    return new Promise(function(resolve, reject) {
        if (location == "ooty") {
            resolve("Trip to "+location);
        }
        else {
            reject(Error("Some error occured"));
        }
    });
}

// resolving
getTrip("ooty").then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log(error);
    }
);


// rejecting
getTrip("coorg").then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log(error.message);
    }
);

// rejecting with catch
getTrip("ootys").then(
    (data) => {
        console.log(data);
    }).catch(
    (error) => {
        console.log(error.message);
    }
);