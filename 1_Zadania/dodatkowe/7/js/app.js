//task 1
function getNumber(counter,table){
    var corect = false;
    for(let i =0;i<table.length;i++){
        if(counter == table[i]){
            return true;
            corect = true;
        }
    }
    if(corect == false){
        return false;
    }
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

// task 2
function createIdentityMatrix(rows,columns){
    var counter = 0,table =  new Array(rows);
    for(var h =0;h<rows;h++){
        table[h] =  new Array(columns);
        for(var j =0;j<columns;j++){
            if(counter == j){
                table[h][counter] = 1;
            }
            else{
                table[h][j] = 0;
            }
        }
        counter = counter + 1;
    }
    return table;
}
console.log(createIdentityMatrix(4,4));