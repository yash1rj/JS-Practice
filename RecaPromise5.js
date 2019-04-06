function getRandomNumber(start = 1, end = 10) {
    return (parseInt(Math.random()*end) % (end-start+1) + start);
}

var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumberOfSecondsGenerator = function() {
    return new Promise((resolve,reject) => {
        let randomNumberOfSeconds = getRandomNumber(2,10);
        setTimeout(() => {
            let randomiseResolving = getRandomNumber(1,10);
            if(randomiseResolving > 5) {
                resolve({
                    randomNumberOfSeconds : randomNumberOfSeconds,
                    randomiseResolving : randomiseResolving
                });
            }
            else {
                reject({
                    randomNumberOfSeconds : randomNumberOfSeconds,
                    randomiseResolving : randomiseResolving
                });
            }
        }, randomNumberOfSeconds*1000)
    });
});

var testPromise = promiseTRRARNOSG();
testPromise.then((value) => {
    console.log(`Value when promise is resolved : `,value);
});
testPromise.catch((reason) => {
    console.log(`Value when promise is rejected : `,reason);
});

for(var i =1; i<=10; i++) {
    let promise = promiseTRRARNOSG();
    promise.then((value) => {
        console.log(`Value when promise is resolved : `,value);
    });
    promise.catch((reason) => {
        console.log(`Value when promise is rejected : `,reason);
    });
}