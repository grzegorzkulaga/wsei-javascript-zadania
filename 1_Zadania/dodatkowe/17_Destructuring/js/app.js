// task 0a
var table = ["snow","rain","sun"];
var first = table[0];
var last = table[2];
console.log(first);
console.log(last);

//task 0b

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
const { type, autoStart } = slider;

slider.type = "hello";
slider.autoStart = false;
console.log(slider.type);
console.log(slider.autoStart);

//task 1
var tableName = [ "Grzegorz", "Wojciech", "Marcin" ];
var [name1,name2,name3] = tableName;
console.log(name1);

//task 2
function generateRandomNumbers(){
    var tab = [];
    for(var i  = 0; i < 6 ; i++){
        tab.push(Math.floor(Math.random() * 6));
    }
    return tab;
}
var numbers = generateRandomNumbers()[0];
var numbersthree = generateRandomNumbers()[2];
console.log(getAnimal(numbers));
console.log(getAnimal(numbersthree));

//task 4
var sliderreturn = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
}

function getAnimal(x){
    var { name, getVoice } = x;
    return x;
}
console.log(getAnimal(sliderreturn));