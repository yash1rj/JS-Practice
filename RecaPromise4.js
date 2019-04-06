var momsPromise = new Promise((resolve,reject) => {
    momsSaving = 200000;
    phonePrice = 60000;

    if(momsSaving > phonePrice) {
        resolve({
            brand : "iphone",
            model : "6s"
        });
    }
    else {
        reject("We don't have enough savings, we'll save more !");
    }
});

momsPromise.then((value) => {
    console.log("Hurray Mom got me ", JSON.stringify(value));
});

momsPromise.catch((reason) => {
    console.log("Mom couldn't get me the phone as ", reason);
});

momsPromise.finally(() => {
    console.log("No problem if I get phone either now or later");
});