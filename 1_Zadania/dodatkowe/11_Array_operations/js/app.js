document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);
    //task 0
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    var lengthCity = [];
    cities.forEach (function (i) { 
        lengthCity.push(i.length); 
        return lengthCity;
    });
    console.log(lengthCity);

    //task 1
    const myFunction = function(x,y) {
        return Math.floor(Math.random()*y+x);
    }

    function randomize(param1, param2, callback){
        if(typeof callback === "function") { 
            return callback(param1,param2);
        }
        else{
            return "callback nie jest funkcja";
        }
    }
    console.log(randomize(1,10,myFunction));    

    //task 2
    var animals = ["cat", "shrimp", "giraffe"];
    animals.forEach (function (i) { 
        console.log(i); 
    });

    //task 3
    var years = [1995, 1856, 2014, 1987];
    var x=0;
    var firstYear = [0,101,201,301,401,501,601,701,801,901,1001,1101,1201,1301,1401,1501,1601,1701,1801,1901,2001,2101];
    years.forEach (function (i) {
        myClick(i);
    });

    function myClick(year) {
        for(var x = 0;x<firstYear.length;x++){
            if(year > firstYear[x] && year < firstYear[x+1])
                {
                    console.log("Rok "+year+" pochodzi z wieku -> " + (x + 1));
                }
        }
    }

    //task 4
    var fahrenheit = [1,2,3,4,5,6,7,7,8,9];
    var value = 1;
    function valueElems() {
        var count = fahrenheit.map(function(x) {
            value = value + x;
        }); 
        return value;
    }
    function valueElemsProduct() {
        var count = fahrenheit.map(function(x) {
            value = value * x;
        }); 
        return value;
    }
    
    console.log("Suma = " + valueElems());
    console.log("Iloczyn = " + valueElemsProduct());
})