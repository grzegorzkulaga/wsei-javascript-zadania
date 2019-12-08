/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Stworzenie funkcji jeden.
function jeden() {

    //Deklaracja zmiennej 'zmienna1'.
    var zmienna1 = 1;

    //Stworzenie zagnieżdżonej funkcji dwa.
    function dwa() {

        //Wypisanie w consoli wartości 'zmienna1'.
        console.log(zmienna1);

        //Deklaracja zmiennej 'zmienna2'.
        var zmienna2 = 3;
    }

    //Wywołanie funkcji 'dwa', w consoli zostanie wypisana wartość zmiennej 'zmienna1'.
    dwa();

    //Próba wypisania w consoli zmiennej 'zmienna2', jednak nie jest ona znana, ponieważ w funkcjach zasięg zmiennych i funkcji zagnieżdżonych zamyka się na najbliższej zewnętrznej funkcji.
    console.log(zmienna2)
}

//Wywołanie funkcji 'jeden', w której zostaje wywołana funkcja 'dwa', czyli w consoli zostanie wypisana wartość zmiennej 'zmienna1'
jeden()