new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(err => console.log(err.message));

// the above is same as below

new Promise((resolve,reject) => {
    reject(Error("yikes!"));
}).catch(err => console.log(err.message));

// The "invisible try..catch" around the executor automatically catches the error and treats it as a rejection.

// That’s so not only in the executor, but in handlers as well. 
// If we throw inside .then handler, that means a rejected promise, so the control jumps to the nearest error handler.4

new Promise((resolve,reject) => {
    resolve("ok");
}).then((res) => {
    throw new Error("sorry!");
}).catch(err => console.log(err.message));

// That’s so not only for throw, but for any errors, including programming errors as well:

new Promise((resolve,reject) => {
    resolve("ok");
}).then((res) => {
    console.log("resolved promise",res);
    blabla();
}).catch(err => console.log(err.message));

// As a side effect, the final .catch not only catches explicit rejections,
//  but also occasional errors in the handlers above.