// task 0
// Spread operator
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil","Jan", "Karol" ];

//Rest operator
function getAverage () {
    var avg = 0;
    for(let i =0; i<arguments.length; i++){
        avg = avg+arguments[i];
    }
    return avg = avg / arguments.length;
}
console.log(getAverage(2,4,4,6));

// task 1
let name = "Grzegorz";
let table = [];
for(let i =0;i<name.length;i++){
    table.push(name[i]);
}
console.log(table);

// task 2
let fruits  = ["orange","apple","grape",2],vegetables  = ["pepper","celery","broccoli","onion"],mix  = [];
for(let i =0;i<fruits.length;i++){
    mix.push(fruits[i]);
}
for(let i =0;i<vegetables.length;i++){
    mix.push(vegetables[i]);
}
console.log(mix);