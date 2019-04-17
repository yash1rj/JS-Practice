function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(fahrenheit) {
            this._tempa = fahrenheit;
        }
        // getter
        get temperature(){
            return (5/9)*(this._tempa-32);
        }
        // setter
        set temperature(celsius){
            this._tempa = (celsius*(9/5))+32;
        }
    }
    /* Alter code above this line */
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);