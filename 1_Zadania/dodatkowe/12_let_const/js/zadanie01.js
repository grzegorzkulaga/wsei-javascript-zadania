//I. Sprawdź najpierw zasięg let
let numbers = [2, 3, 4];
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to TODO:  Wypisuje całą zdefiniowana tablice
    //Dlaczego taki wynik? TODO: console.log(numbers); -> odnajduje zdefiniowaną tablice let numbers, bo jest zdefiniowana przed jej wywołaniem.
    console.log(numbers);

    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to TODO: Wypisuje całą zdefiniowana tablice
    //Dlaczego taki wynik? TODO: console.log(numbers); -> odnajduje zdefiniowaną tablice let numbers, bo jest zdefiniowana przed jej wywołaniem.
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: Wypisuje całą zdefiniowana tablice
//Dlaczego taki wynik? TODO: console.log(numbers); -> odnajduje zdefiniowaną tablice let numbers, bo jest zdefiniowana przed jej wywołaniem.
console.log(numbers);



//II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: const zachowuje sie tak samo jak let, jesli chodzi o wywoływanie jej. Dalej PI znajduje sie zarówno we wnętrzu bloku, jak i na zewnątrz. nie jest zdefiniowane wewnątrz funkcji, aby jej nie było widać poza blokiem zdefiniowanym
    console.log(PI);

    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: const zachowuje sie tak samo jak let, jesli chodzi o wywoływanie jej. Dalej PI znajduje sie zarówno we wnętrzu bloku, jak i na zewnątrz. nie jest zdefiniowane wewnątrz funkcji, aby jej nie było widać poza blokiem zdefiniowanym
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: 3.14
//Dlaczego taki wynik? TODO: const zachowuje sie tak samo jak let, jesli chodzi o wywoływanie jej. Dalej PI znajduje sie zarówno we wnętrzu bloku, jak i na zewnątrz. nie jest zdefiniowane wewnątrz funkcji, aby jej nie było widać poza blokiem zdefiniowanym
console.log(PI);