let isMomHappy = true;

let willIGetNewPhone = new Promise(
    function(resolve,reject) {
        if (isMomHappy) {
            let phone = {
                color: "black",
                brand: "Samsung"
            };
            resolve(phone);
        }
        else {
            let reason = new Error("Mom not happy");
            reject(reason);
        }
    }
);

let showOff = function(phone) {
    let msg = "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone.";
    return Promise.resolve(msg); 
};

var askMom = function() {
    console.log("Before asking mom");
    willIGetNewPhone
        .then(showOff)
        .then( fulfilled => {
            console.log(fulfilled);
        })
        .catch(e => { console.log(e.message)});
    console.log("After asking mom");
}

askMom();