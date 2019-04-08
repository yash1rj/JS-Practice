// Concurrent Start of Execution
// asynchronous execution starts as soon as the promise is created. 
// await just blocks the code within the async function until the promise is resolved. 
// Creating a function which will help me clearly understand this ->

const {performance} = require('perf_hooks');

var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(n=0) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                resolvedAfterNSeconds : n
            });
        }, n*1000);
    });
});

function executingAt() {
    return (performance.now() - startTime) / 1000;
}

var concurrent = async function() {
    startTime = performance.now();
    const resolveAfter3seconds = promiseTRSANSG(3);
    console.log("Promise for resolveAfter3seconds created at ", executingAt());
    const resolveAfter4seconds = promiseTRSANSG(4);
    console.log("Promise for resolveAfter4seconds created at ", executingAt());
    resolveAfter3seconds.then(function(){
        console.log("resolveAfter3seconds resolved at ", executingAt());
    });
    resolveAfter4seconds.then(function(){
        console.log("resolveAfter4seconds resolved at ", executingAt());
    });
    console.log(await resolveAfter4seconds);
    console.log("await resolveAfter4seconds executed at ", executingAt());
    console.log(await resolveAfter3seconds); 
    console.log("await resolveAfter3seconds executed at ", executingAt());
  };
  concurrent();