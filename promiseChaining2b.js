async function loadJson(url) {
    const response = await fetch(url);
    return await response.json();
  }
  
async function loadGithubUser(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    return await response.json();
}
  
function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
  
        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}
  
// Use them:
loadJson('./user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));