sayHi();

function sayHi(){
    console.log("Cześć");
}
sayHi();


sayHello(); // nie zadziała
var sayHello = function (){
    console.log("Witaj");
}

sayHello();

//sayHi() -> hoisting, czyli przeniesienie deklaracji na samą górę.
//sayHello() -> wyrażenie funckji, więc wywołanie jej przed definicją skutkuje wypisaniem błędu.