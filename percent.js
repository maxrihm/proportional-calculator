const getItems = () => document.getElementsByClassName("inputs2");
const getLabels = () => document.getElementsByClassName("inputs2_label");
var items, labels,
current_item_value,
current_item_value_second,
range_scaller,
input_scaller,
current_item_value;

const initializeElements = () => {
    items = getItems();
    labels = getLabels();
    range_scaller = document.getElementById("range_scaller");
    input_scaller = document.getElementById("input_scaller");
};

const clickedAction = (element) => {
    current_item_value = element.value
        for(let item of items){
            if (item != element) current_item_value_second = item.value;
            item.classList.remove("clicked")
        }
    element.classList.add("clicked")
    range_scaller.max = (getPercent(current_item_value_second) * 2)
    calculatePercent()
    

};

const calculatePercent = () => {
    for(let label of labels) label.innerText="";
    
    for(var i = 0; i < 2; i++) {
        labels[i].innerText = getPercent(items[i].value)+'%';
    }
    onChange(null, getPercent(current_item_value_second));
};

const onChange = function(element, num) {
    var univ_value;
    
    if (element!=null){
    univ_value = element.value
    console.log(univ_value)
    if (element == input_scaller) range_scaller.value = univ_value
    else input_scaller.value = univ_value;
}
else univ_value = num, range_scaller.value = univ_value, input_scaller.value = univ_value;

for(var i = 0; i < 2; i++) {
    if(!items[i].classList.contains("clicked")) {
    items[i].value = calculateNewPercent(univ_value);
    labels[i].innerText = input_scaller.value+'%';
}
}
};

const resetButton = _ => { 
    onChange(null, getPercent(current_item_value_second));
    
};

const getPercent = num => (num/current_item_value)*100;
const setPercent = num => (num/100) * current_item_value;
const calculateNewPercent = val => ((val/100)*current_item_value);