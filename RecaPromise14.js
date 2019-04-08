var requestComplete = true;

promise1 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 1");
});

promise2 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 2");
});

promise3 = new Promise((resolve, reject) => {
 
 setTimeout( ()=>{
 resolve("data received from 3");
 }
,2000);
//We simulate a delay in data receipt by using setTimout() 
});

promise1.then((message) => {
     console.log(message);
     return promise2; //return promise2 when promise1 resolves.
}).then((message) => {
     console.log(message);
     return promise3; //return promise3 when promise2 resolves.
}).then((message) => {
     console.log(message); //resolve promise3.
})