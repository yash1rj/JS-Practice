let cityDrop = document.getElementById("city");
let stateDrop = document.getElementById("state");

var opt = document.createElement('option');
opt.value = "--PLEASE SELECT STATE--";
opt.innerHTML = "--PLEASE SELECT STATE--";
cityDrop.appendChild(opt);

function cityLister(state) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/AJAX-demo/DOM%20and%20AJAX/state.json");
    xhr.onload = () => {
        obj = JSON.parse(xhr.responseText);
        var cityArr = obj[state];
        // console.log(cityArr);
        // console.log(stateDrop.value);
        
        if (stateDrop.value == "defaultSelection") {
            cityDrop.options.length = 0;
            opt = document.createElement('option');
            opt.value = "--PLEASE SELECT STATE--";
            opt.innerHTML = "--PLEASE SELECT STATE--";
            cityDrop.appendChild(opt);
        }

        if (stateDrop.value !== "defaultSelection") {
            // console.log("in");
            cityDrop.options.length = 0;
            opt = document.createElement('option');
            opt.value = "--SELECT--";
            opt.innerHTML = "--SELECT--";
            cityDrop.appendChild(opt);
            
            for(var i=0; i < cityArr.length; i++) {
                opt = document.createElement('option');
                opt.value = cityArr[i];
                opt.innerHTML = cityArr[i];
                cityDrop.appendChild(opt);
            }
        }
    };
    xhr.send();
}
