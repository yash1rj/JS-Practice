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

startTime = performance.now();  //Run at the beginning of the code

function executingAt() {
  return (performance.now() - startTime) / 1000;
}

var parallel = async function() {
  startTime = performance.now();
  promisesArray = [];
  console.log(executingAt());
  promisesArray.push(promiseTRSANSG(3));
  promisesArray.push(promiseTRSANSG(4));
  result = await Promise.all(promisesArray);
  console.log(result);
  console.log(executingAt());
}
parallel();