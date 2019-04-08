var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(n=0) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                resolvedAfterNSeconds : n
            });
        }, n*1000);
    });
});

startTime = performance.now();

startTime = performance.now();  //Run at the beginning of the code
function executingAt() {
  return (performance.now() - startTime) / 1000;
}

var sequential = async function() {
  console.log(executingAt());
  const resolveAfter3seconds = await promiseTRSANSG(3);
  console.log("resolveAfter3seconds", resolveAfter3seconds);
  console.log(executingAt());
  const resolveAfter4seconds = await promiseTRSANSG(4);
  console.log("resolveAfter4seconds", resolveAfter4seconds);
  end = executingAt();
  console.log(end);
}
sequential();