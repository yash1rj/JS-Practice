window.addEventListener('unhandledrejection', function(event) {
    // the event object has two special properties:
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Whoops! - the unhandled error object
});
  
new Promise(function() {
    throw new Error("Whoops!");
}); // no catch to handle the error


// The event is the part of the HTML standard.

// If an error occurs, and there’s no .catch, the unhandledrejection handler triggers, 
// and gets the event object with the information about the error, so we can do something.

// Usually such errors are unrecoverable, so our best way out is to inform the user about
//  the problem and probably report the incident to the server.