function cityLister(state) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/AJAX-demo/DOM%20and%20AJAX/state.json");
    xhr.onload = () => {
        obj = JSON.parse(xhr.responseText);
        var cityArr = obj[state];
        console.log(cityArr);

        for(var i=0; i < cityArr.length; i++) {
        }
    };
    xhr.send();
}
