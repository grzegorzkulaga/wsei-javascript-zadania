//Zadanie 0
const x = 5;
let y = 3;

for (var z = 0;z < 1; z++) {
    console.log("const for -> "+x);
    console.log("let for -> "+y);
}

function myFn() {
    console.log("const myFn() -> "+x);
    console.log("let myFn() -> "+y);
}
myFn();

{
    console.log("const {} -> "+x);
    console.log("let {} -> "+y);
}
//Zadanie 3

for (var i = 0; i < 11; i++) {
    console.log("var i -> "+ i);
}
console.log("poza pentlą i -> " + i); // Zmienna typu var jest zmienna globalna, nie ważne gdzie jest zdefiniowana

for (let j = 0; j < 11; j++) {
    console.log("let j -> "+ j);
}
//console.log("poza pentlą j -> " + j); // przy wypisaniu zmiennej j wychodzi włąd Uncaught ReferenceError: j is not defined, co znaczy, ze nie mozna zlokalizować definicji zmiennej j

//Zadanie 5 
var IIFE = function (){
    console.log("hello world");
}
IIFE();
// Zdanie 6
var name = "hellow";
var IIFE = function (s){
    console.log(s);
}
IIFE(name); // gdy do definicji użyje let badź const nie mogę wykonać tego zadania