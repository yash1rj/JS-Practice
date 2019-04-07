function getRandomNumber(start = 1, end = 10) {
    return (parseInt(Math.random()*end) % (end-start+1) + start);
}

var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumberOfSecondsGenerator = function() {
    return new Promise((resolve,reject) => {
        let randomNumberOfSeconds = getRandomNumber(2,10);
        setTimeout(() => {
            let randomiseResolving = getRandomNumber(1,10);
            if(randomiseResolving > 5) {
                resolve({
                    randomNumberOfSeconds : randomNumberOfSeconds,
                    randomiseResolving : randomiseResolving
                });
            }
            else {
                reject({
                    randomNumberOfSeconds : randomNumberOfSeconds,
                    randomiseResolving : randomiseResolving
                });
            }
        }, randomNumberOfSeconds*1000)
    });
});

async function testAsync() {
    for(var i=0; i<5; i++) {
        try {
            res1 = await promiseTRRARNOSG();
            console.log("Result 1 ", res1);
            res2 = await promiseTRRARNOSG();
            console.log("Result 2 ", res2);
        }
        catch(e) {
            console.log("Error ", e);
        }
        finally {
            console.log("This is done");
        }
    }
}

testAsync();