new Promise(function(resolve,reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result);

    return new Promise(function(resolve,rejecct) {
        setTimeout(() => resolve(result*2), 1000);
    })
}).then(function(result) {
    console.log(result);

    return new Promise(function(resolve,rejecct) {
        setTimeout(() => resolve(result*2), 1000);
    })
}).then(function(result) {
    console.log(result);
})

// So the output is 1 → 2 → 4, but now with 1 second delay between alert calls.