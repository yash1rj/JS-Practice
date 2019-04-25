let power = 666;

function man() {
    power = 10;
    console.log("Man's power is:",power);
    
}

function bat(spider) {
    power = 30;
    try {
        spider();
    } catch(e) {
        power = 20;
    }
    console.log("Bat's power is:",power); 
}

function spider() {
    bat(man);
}

spider();