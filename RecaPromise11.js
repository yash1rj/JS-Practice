// Promise.All

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

// case: it rejects with reason of 1st promise that rejects
console.time("Promise.All");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(1));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRJANSG(3));
promisesArray.push(promiseTRSANSG(2));

var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then((values) => {
    console.timeEnd("Promise.All");
    console.log("All the promises are resolved ", values);
});
handleAllPromises.catch((reason) => {
    console.timeEnd("Promise.All");
    console.log("One of the promises failed with the following reason", reason);
});