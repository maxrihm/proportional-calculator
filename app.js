var scaller;
var scaller_box;
var boxes_array;
var boxes_array_name;
var br_array;
var current_rates;
var initial_val_arr = [];
var previous_element;
var upper_pannel;

function declareElements() {
    scaller = document.getElementById("range_scaller");
    upper_pannel = document.getElementById("upper_pannel");
    scaller_box = document.getElementById("scaller_box");
    boxes_array_name = document.getElementsByClassName("input_name");
    boxes_array = document.getElementsByClassName("input_weight");
    br_array = document.getElementsByClassName("brs");
}

function updateInitial() {
    for (var i = 0; i < boxes_array.length; i++) {
        initial_val_arr[i] = boxes_array[i].value;
    }
}

function toRange(element){
    upper_pannel.classList.remove("upper_panel_hide");
    upper_pannel.classList.add("upper_panel_visible");

    updateHighlight(element);
    current_rates = element.value;

    scaller.max = element.value * 2;
    scaller.value = element.value;
    scaller_box.value = element.value;

    previous_element = element;
}

function changeSourceRange(element, number) {
    if (element!=undefined) {
    var bigger_times = element.value / current_rates;
    if (element==scaller)
    scaller_box.value = element.value
    if(element==scaller_box)
    scaller.value = element.value;
}
else
var bigger_times = number / current_rates;
    

    for (var i = 0; i < boxes_array.length; i++) {
        if(boxes_array[i].value != "")
        boxes_array[i].value = initial_val_arr[i] * bigger_times;
    }
}

function updateHighlight(element) {
    if (element!=undefined) {
    if (previous_element != undefined)
    previous_element.classList.remove("highlight");

    element.classList.add("highlight")
}
else
previous_element.classList.remove("highlight");
}


function setDefault() {
    changeSourceRange(undefined, current_rates);
    scaller_box.value = current_rates;
    scaller.value = current_rates;

}

function discardElements() {
        setDefault()
        upper_pannel.classList.remove("upper_panel_visible");
        upper_pannel.classList.add("upper_panel_hide");
        updateHighlight(undefined);
}

function updateScrolls() {

}

function createInputs(element) {
    var arr = Array.from(boxes_array_name);
    var index_of_element = arr.indexOf(element);
    var last_element = boxes_array_name.length-1;

    if(element.value != "" && index_of_element==last_element) {

    var input_name = document.createElement("input");
    input_name.type = "text";
    input_name.setAttribute("onchange", "createInputs(this)"); 
    input_name.className = "input_name";
    input_name.style.marginRight = "7px";
    document.body.appendChild(input_name);

    var input_weight = document.createElement("input");
    input_weight.type = "text";
    input_weight.className = "input_weight";
    input_weight.setAttribute("ondblclick", "toRange(this)"); 
    input_weight.setAttribute("onchange", "updateInitial()"); 
    document.body.appendChild(input_weight);

    var br = document.createElement("div");
    br.value = "<br/>"
    document.body.appendChild(br);


}
if (element.value == "") {
element.remove();

var spair_element = boxes_array[index_of_element];
if( spair_element.classList.contains("highlight"))
discardElements();
spair_element.remove();

var br = br_array[index_of_element];
br.remove();

}

}