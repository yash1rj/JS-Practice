// fetch("https://no-such-server.blabla")    // rejects
//     .then(response => response.json())
//     .catch(err => alert(err.message))


fetch("/")
    .then(response => response.json())  // rejects: the page is HTML, not a valid json
    .catch(err => alert(err.message))