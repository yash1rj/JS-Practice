// As we already noticed, .catch behaves like try..catch. We may have as many .then as we want, 
// and then use a single .catch at the end to handle errors in all of them.

// In a regular try..catch we can analyze the error and maybe rethrow it if can’t handle. 
// The same thing is possible for promises.

// If we throw inside .catch, then the control goes to the next closest error handler. 
// And if we handle the error and finish normally, then it continues to the closest successful .then handler.

// In the example below the .catch successfully handles the error:


// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    console.log("The error is handled, continue normally");
  
  }).then(() => console.log("Next successful handler runs"));

//   Here the .catch block finishes normally. So the next successful .then handler is called.