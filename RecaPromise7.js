var promise = Promise.resolve(1);

promise.then((value) => {
    console.log("This will run as promise is resolved with value : ", value);
});

promise.catch((reason) => {
    console.log("This won't run as it is a resolved promise ", reason);
})