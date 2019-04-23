let cityDrop = document.getElementById("city");

function cityLister(state) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/AJAX-demo/DOM%20and%20AJAX/state.json");
    xhr.onload = () => {
        obj = JSON.parse(xhr.responseText);
        var cityArr = obj[state];
        // console.log(cityArr);

        cityDrop.options.length = 0;
        for(var i=0; i < cityArr.length; i++) {
            var opt = document.createElement('option');
            opt.value = cityArr[i];
            opt.innerHTML = cityArr[i];
            cityDrop.appendChild(opt);
        }
    };
    xhr.send();
}
