var keepsHisWord = false;

promise3 = new Promise((resolve,reject) => {
    if(keepsHisWord) {
        resolve("Promise keeper");
    }
    else {
        reject("Promise breaker");
    }
});

console.log(promise3);