promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({
            msg: "Man likes to keep his word",
            code: "MKW"
        });
    }, 10*1000);
});

console.log(promise2)