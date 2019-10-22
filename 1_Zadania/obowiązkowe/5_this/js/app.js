// 0 
var car = {
    brand: "Audi",
    color: "Black",
    numberOfKilometers: 0,

    printCarinfo:function(){
        console.log(car.color + " " + car.brand + ", " + car.numberOfKilometers + "km");
    },

    drive:function(km){
            this.numberOfKilometers += km;
    }
}
car.printCarinfo();
car.drive(20);
car.printCarinfo();

// 1 
car.serviceDates = ["11.11.2014", "11.11.2015", "11.11.2016"];
 
car.newServiceDates = function(newDate){
    this.serviceDates.push(newDate);
}

car.showServiceDates = function(){
    for(var i=0; i<this.serviceDates.length; i++){
        console.log(this.serviceDates[i]);
    }
}

car.newServiceDates("11.11.2017");
car.newServiceDates("11.11.2018");
car.showServiceDates();
car.printCarinfo();

// 3
var stairs = {
    step: 0,

    up: function(){
        this.step++;
        console.log(this.step);
    },

    down: function(){
        this.step--;
        console.log(this.step);
    },

    printStep: function(){
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();