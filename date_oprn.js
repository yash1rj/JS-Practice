let inDate = new Date("Feb 28, 2020 11:13:00");

console.log("Start Date: "+inDate.toDateString().substring(4));

let n = 1;
n2millisec = n*24*60*60*1000;

resDate = inDate.getTime() + n2millisec;
resDate = new Date(resDate);
console.log("Final Date: "+resDate.toDateString().substring(4));