// part1
// fetch('./user.json')
//     // load it as json
//     .then(response => response.json())
//     // make a request to github
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     // load the response as json
//     .then(response => response.json())
//     // Show the avatar image (githubUser.avatar_url) for 3 seconds
//     .then(githubUser => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example"
//         document.body.append(img);

//         setTimeout(() => img.remove(), 3000);
//     });
// part1end

    // how can we do something after the avatar has finished showing and gets removed? 
    // For instance, we’d like to show a form for editing that user or something else. As of now, there’s no way.

    // To make the chain extendable, we need to return a promise that resolves when the avatar finishes showing.

// part2
fetch('./user.json')
    // load it as json
    .then(response => response.json())
    // make a request to github
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // load the response as json
    .then(response => response.json())
    // Show the avatar image (githubUser.avatar_url) for 3 seconds
    .then(githubUser => new Promise(function(resolve,reject) {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example"
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    // triggers after 3 seconds
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
    //.catch(err => alert(err.message)); //Normally, .catch doesn’t trigger at all, because there are no errors. 
    // But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it.

// part2end

// Now right after setTimeout runs img.remove(), it calls resolve(githubUser), 
// thus passing the control to the next .then in the chain and passing forward the user data.

// As a rule, an asynchronous action should always return a promise.

// That makes it possible to plan actions after it. Even if we don’t plan to extend the chain now, we may need it later.