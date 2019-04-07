// const {performance} = require('perf_hooks');

startTime = performance.now();  //Run at the beginning of the code
function executingAt() {
  return (performance.now() - startTime) / 1000;
}

async function fetchUserDetailsWithStats() {
  i = 0;
  for (name of ["nkgokul", "BrendanEich", "gaearon"]) {
    i++;
    console.log("Starting API call " + i + " at " + executingAt());
    userDetails = await fetch("https://api.github.com/users/" + name);
    userDetailsJSON = await userDetails.json();
    console.log("Finished API call " + i + "at " + executingAt());
    console.log("userDetailsJSON", userDetailsJSON);
  }
}

fetchUserDetailsWithStats();