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