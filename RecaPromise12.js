// Promise.race

var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(n=0) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                resolvedAfterNSeconds : n
            });
        }, n*1000);
    });
});

var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(n=0) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject({
                rejectedAfterNSeconds : n
            });
        }, n*1000);
    });
});


// case: one of the promises resolves first
console.time("Promise.Race");
var promisesArray = [];

promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(3));
promisesArray.push(promiseTRSANSG(2));
promisesArray.push(promiseTRJANSG(3));
promisesArray.push(promiseTRSANSG(4));

var handleAllPromises = Promise.race(promisesArray);
handleAllPromises.then((values) => {
    console.timeEnd("Promise.Race");
    console.log("The fastest promise is resolved ", values);
});
handleAllPromises.catch((reason) => {
    console.timeEnd("Promise.Race");
    console.log("The fastest promise rejected with the following reason", reason);
});