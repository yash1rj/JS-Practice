let keepsHisWord;
keepsHisWord = true;

promise1 = new Promise((resolve,reject) => {
    if(keepsHisWord) {
        resolve("The man keeps his word");
    }
    else {
        reject("The man doesn't keep his word");
    }
});

console.log(promise1);