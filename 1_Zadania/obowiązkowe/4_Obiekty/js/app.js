// 0a
var city = {
    capital: "Warszawa",
    population: 350000,
    president: "Andrzej Kowalski",
    primeMinisters: ["Mateusz Kowalski", "Jan Kowalski"]
};

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

// 0b

var timeMachine = {
    shape: "square",
    model: "12345",
    run:function(date,place)
    {
        console.log("Przenosisz się do dnia: " + date + " w miejsce: " + place);
    }
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("20.10.2020","Honolulu");

// 1

var book = {
    title: "Title of the book",
    author: "Grzegorz Kułaga",
    numberOfPages: 250
}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// 2

var person = {
    name: "Grzegorz Kułaga",
    age: 22,
    sayHello:function(){
        console.log("Hello");
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

// 3

    var recipe = {
        title: "Sandwich with cheese and ham",
        servings: 3
    }

    recipe.ingredients=["bread, butter, cheese, ham"];

    console.log(recipe.title);
    console.log(recipe.servings);
    console.log(recipe.ingredients);

// 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if(typeof spoon == "object")
{
    console.log("spoon exist");
}
else
{
    console.log("spoon not exist");
}