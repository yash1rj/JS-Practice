// const {performance} = require('perf_hooks');

startTime = performance.now();  //Run at the beginning of the code
function executingAt() {
  return (performance.now() - startTime) / 1000;
}

divBlock = document.getElementById("data");
divBlock.innerHTML = "";

async function fetchUserDetailsWithStats() {
  i = 0;
  for (name of ["nkgokul", "BrendanEich", "gaearon"]) {
    i++;
    let st = "Starting API call " + i + " at " + executingAt();
    console.log(st);
    divBlock.innerHTML = divBlock.innerHTML + st + "<hr>";
    userDetails = await fetch("https://api.github.com/users/" + name);
    userDetailsJSON = await userDetails.json();
    let fd = "Finished API call " + i + " at " + executingAt();
    console.log(fd);
    divBlock.innerHTML = divBlock.innerHTML + fd + "<hr>";
    let details = "userDetailsJSON " + JSON.stringify(userDetailsJSON);
    console.log(details);
    
    divBlock.innerHTML = divBlock.innerHTML + details + "<hr>";
  }
}

fetchUserDetailsWithStats();