//Zadanie 0a
var city = {
    capital: "Warszawa",
    population: "350000",
    president: "Andrzej Kowalski",
    primeMinisters: ["Mateusz Kowalski", "Jan Kowalski"]
};

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//Zadanie 0b

var timeMachine = {
    shape: "square",
    model: "12345",
    run:function(date,place)
    {
        console.log("Przenosisz się do dnia: "+ date +" w miejsce: "+place);
    }
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("20.10.2020","Honolulu");