placesToVisit= ["Paris", "New York",  "Switzerland","ooty","coorg"];
function filterPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}
filteredPlaces = placesToVisit.filter(filterPlaces);
console.log(filteredPlaces );