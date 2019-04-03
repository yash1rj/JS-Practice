fetch('./user.json')
    // load it as json
    .then(response => response.json())
    // make a request to github
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // load the response as json
    .then(response => response.json())
    // Show the avatar image (githubUser.avatar_url) for 3 seconds
    .then(githubUser => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example"
        document.body.append(img);

        setTimeout(() => img.remove(), 3000);
    });