function bat(man, maxPower) {
    power = maxPower;
    try {
        man();
    } finally {
        power = 400;
    }
    console.log(power);
}

function man() {
    try {
        throw new Error();
        power = 100;
    } catch(e) {
        power = 200;
    } finally {
        power = 300;
    }
}

bat(man, 100);