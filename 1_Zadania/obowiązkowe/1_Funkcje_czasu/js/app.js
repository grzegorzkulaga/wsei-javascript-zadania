//Napisz funkcję countHello(), która jako parametr przyjmie liczbę całkowitą od 1-10. 
//W funkcji uruchom funkcję setInterval. Niech jego zadaniem będzie wypisywanie w konsoli tekstu "Hello" oraz licznika, 
//zliczającego, który raz już został uruchomiony setInterval. Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty setInterval.
function countHello(number){
    var counter = 1;
    var interval = setInterval(()=>{
        
        if(counter == number)
        {
            clearInterval(interval);
        }
        console.log("hello", number);
        counter++;

    }, 500)
}
countHello(5);