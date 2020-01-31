//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
console.log(name);
//name = "kacper"; // to przypisanie nie zadziałą - > zadanie04.js:5 Uncaught TypeError: Assignment to constant variable.
//console.log(name); 

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];
//a)  simpleArray = [23,23]; // nadpisanie nie uda sie : zadanie04.js:5 Uncaught TypeError: Assignment to constant variable.
simpleArray.push(2); // b) dodanie elemntu udało sie
simpleArray[2] = "sadsadsad"; //c) przypisanie nowej wartosci udało sie

//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}
//a)  dog = [23,23]; // nadpisanie nie uda sie : zadanie04.js:25 Uncaught TypeError: Assignment to constant variable.
dog.skill = "sadsadsad"; // b) zmiana właśność skill obiektu dog udałą się
dog.age= 1; //c) dodanie nowej wartości do obiektu age udała sie