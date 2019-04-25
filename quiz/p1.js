function spider(man) {
    console.log("Spider");
    return man;
}

function man() {
    console.log("Man");
}

function bat(man) {
    console.log("Bat");
    spider(man)();
}

bat(man);