// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).then(function() {

    /* never runs here */
    console.log("inside .then");

  }).catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      console.log("handle it");
    } else {
        console.log("Can't handle such error");
  
      throw error; // throwing this or another error jumps to the next catch
    }
  
  }).then(function() {
      
    /* never runs here */
    console.log("inside .then");

  }).catch(error => { // (**)
  
    console.log(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
  
  });