startTime = performance.now();  //Run at the beginning of the code

function executingAt() {
  return (performance.now() - startTime) / 1000;
}

divBlock = document.getElementById("data");
divBlock.innerHTML = "";

async function fetchAllUsersDetailsParallelyWithStats() {
    let singleUsersDetailsPromises = [];
    for (name of ["nkgokul", "BrendanEich", "yash1rj"]) {
        let promise = fetchSingleUsersDetailsWithStats(name);
        let promCreateMsg = "Created Promise for API call of " + name + " at " + executingAt();
        console.log(promCreateMsg);
        divBlock.innerHTML = divBlock.innerHTML + promCreateMsg + "<hr>";
        singleUsersDetailsPromises.push(promise);
    }
    
    let promAddFinish = "Finished adding all promises at " + executingAt();
    console.log(promAddFinish);
    divBlock.innerHTML = divBlock.innerHTML + promAddFinish + "<hr>";
    let allUsersDetails = await Promise.all(singleUsersDetailsPromises);
    let reslt = "Got the results for all promises at " + executingAt();
    console.log(reslt);
    divBlock.innerHTML = divBlock.innerHTML + reslt + "<hr>";
    console.log(allUsersDetails);
    divBlock.innerHTML = divBlock.innerHTML + JSON.stringify(allUsersDetails) + "<hr>";
}

async function fetchSingleUsersDetailsWithStats(name) {
    let st = "Starting API call " + name + " at " + executingAt();
    console.log(st);
    divBlock.innerHTML = divBlock.innerHTML + st + "<hr>";
    userDetails = await fetch("https://api.github.com/users/" + name);
    userDetailsJSON = await userDetails.json();
    let fd = "Finished API call " + name + " at " + executingAt();
    console.log(fd);
    divBlock.innerHTML = divBlock.innerHTML + fd + "<hr>";
    return userDetailsJSON;
}

fetchAllUsersDetailsParallelyWithStats();