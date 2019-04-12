// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [ 
            "Let It Rock", 
            "You Give Love a Bad Name" 
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
            "1999", 
            "Little Red Corvette" 
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (prop != "tracks" && value !="") {
        collection[id].prop = value;
    }
    if (prop == "tracks" && collection[id].hasOwnProperty("tracks")) {
        collection[id].prop = [];
        if (value != "") {
            collection[id].prop.push(value);
        }
    }
    if (value == "") {
        delete collection[id].prop;
    }

    return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(2468, "tracks", "Free"));
console.log(updateRecords(2548, "tracks", ""));
console.log(updateRecords(1245, "album", "Riptide"));