// multiple handlers

var promise = Promise.resolve(1);

promise.then((value) => {
    console.log("This will run as promise is resolved with value : ", value);
});

promise.then((value) => {
    console.log("This will run as multiple handlers can be added. Twice of value received : ", value*2);
});

promise.catch((reason) => {
    console.log("This won't run as it is a resolved promise ", reason);
})