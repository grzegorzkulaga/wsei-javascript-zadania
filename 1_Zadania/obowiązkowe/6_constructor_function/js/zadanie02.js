var Calculator = function(){
    this.historyOfOperations = [];
}

Calculator.prototype.add = function(num1, num2){
    this.result = num1 + num2;
    this.historyOfOperations.push("added " + num1 + " to " + num2 + " got " + this.result);
}

Calculator.prototype.multiply = function(num1, num2){
    this.result = num1 * num2;
    this.historyOfOperations.push("multiplied " + num1 + " with " + num2 + " got " + this.result);
}

Calculator.prototype.subtract = function(num1, num2){
    this.result = num1 - num2;
    this.historyOfOperations.push('subtracted ' + num1 +  ' from ' + num2 + ' got ' + this.result);
}

Calculator.prototype.divide = function(num1, num2){
    this.result = num1 / num2;
    this.historyOfOperations.push('divided ' + num1 +  ' by ' + num2 + ' got ' + this.result);
}

Calculator.prototype.printOperations = function(){
    console.log('All operations in memory: ', this.historyOfOperations);
}

Calculator.prototype.clearOperations = function(){
    this.historyOfOperations = [];
    console.log("Clear all operations in memory");
}

var calc = new Calculator();
calc.add(5,5);
calc.multiply(6,6);
calc.subtract(5,6);
calc.divide(10,2);
calc.printOperations();
calc.clearOperations();

var calc2 = new Calculator();
calc2.add(10,15);
calc2.multiply(10,10);
calc2.subtract(15,10);
calc2.divide(30,10);
calc2.printOperations();
