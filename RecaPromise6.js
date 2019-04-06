var promise = Promise.reject("Not interested");

promise.then((value) => {
    console.log("This won't run as promise is rejected ", value);
});

promise.catch((reason) => {
    console.log("This runs as it is a rejected promise. The reason is ", reason);
})