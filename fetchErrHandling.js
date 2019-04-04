// The promise returned by fetch rejects when it’s impossible to make a request. 
// For instance, a remote server is not available, or the URL is malformed. 
// But if the remote server responds with error 404, or even error 500, then it’s considered a valid response.

// What if the server returns a non-JSON page with error 500 in the line (*)? 
// What if there’s no such user, and github returns a page with error 404 at (**)?


// fetch('no-such-user.json') // (*)
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`)) // (**)
//   .then(response => response.json())
//   .catch(alert);

// As of now, the code tries to load the response as JSON no matter what and dies with a syntax error. 
// You can see that by running the example above, as the file no-such-user.json doesn’t exist.

// That’s not good, because the error just falls through the chain, without details: what failed and where.

// So let’s add one more step: we should check the response.status property that has HTTP status, 
// and if it’s not 200, then throw an error.

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    }
    else {
        throw new HttpError(response);
    }
}

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}

// loadJson('no-such-user.json')
//     .catch(alert);

// We make a custom class for HTTP Errors to distinguish them from other types of errors. 
// Besides, the new class has a constructor that accepts response object and saves it in the error. 
// So error-handling code will be able to access it.
// Then we put together the requesting and error-handling code into a function that fetches the url and 
// treats any non-200 status as an error. That’s convenient, because we often need such logic.
// Now alert shows better message.

// The great thing about having our own class for errors is that we can easily check for it in error-handling code.

// For instance, we can make a request, and then if we get 404 – ask the user to modify the information.

// The code below loads a user with the given name from github. 
// If there’s no such user, then it asks for the correct name:

async function demoGithubUser() {
    let name = prompt("Enter a name?", "yash1rj");

    try {
        const user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Full name: ${user.name}.`);
        return user;
    }
    catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        }
        else {
            throw err; // (*)
        }
    }
}

demoGithubUser();

// In case of an error, the promise state becomes “rejected”, 
// and the execution should jump to the closest rejection handler. 
// But there is no such handler in the examples above. So the error gets “stuck”.

// In practice, just like with a regular unhandled errors, 
// it means that something terribly gone wrong, the script probably died.

// Most JavaScript engines track such situations and generate a global error in that case. 
// We can see it in the console.