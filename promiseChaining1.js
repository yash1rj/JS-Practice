new Promise(function(resolve,reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result);
    return result*2;
}).then(function(result) {
    console.log(result);
    return result*2;
}).then(function(result) {
    console.log(result);
    return result*2;
})

// The idea is that the result is passed through the chain of .then handlers.

// Here the flow is:

// 1.The initial promise resolves in 1 second ,
// 2.Then the .then handler is called .
// 3.The value that it returns is passed to the next .then handler 
// 4.…and so on.

// [new Promise] -> {resolve(1)} --> [.then] -> {return 2} --> [.then] -> {return 4} --> [.then]