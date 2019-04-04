new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(err => console.log(err.message));


// There’s an "implicit try..catch" around the function code. So all synchronous errors are handled.

// But here the error is generated not while the executor is running, but later. So the promise can’t handle it.