// Zadanie 0
function checkArray(array)
{
    let checked = [];
    for(let i=0; i<array.length;i++)
    {
        let check = true;
        for(let j=0; j<array[i].length; j++)
        {
            if(array[i][j]%2 !=0)
            {
                check=false;
                break;
            }
        }
        checked.push(check);
    }
    return checked;
}
checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

// Zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

// Zadanie 2 
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log("Pierwszy wymiar tablicy: ")
for(var i=0; i<task2Array.length;i++)
{
    console.log(task2Array[i]);
}

console.log("Drugi wymiar tablicy: ")
for(var i=0; i<task2Array.length; i++)
{
    console.log(task2Array[i].length);
}

console.log("Drugi wymiar tablicy:");
for(var i=0; i<task2Array.length; i++)
{
    for(var j=0; j<task2Array[i].length;j++)
    {
        console.log(task2Array[i][j]);
    }
}

// Zadanie 3
function print2DArray(array)
{
    for(var i=0; i<array.length;i++)
    {
        for(var j=0; j<array[i].length; j++)
        {
            console.log(array[i][j]);
        }
    }
}

// Zadanie 4
var table = [[1], [2,3,4,5,6], [7,8,9,10,11,12,13]];
print2DArray(table);

// Zadanie 5
function create2DArray(rows,columns)
{
    var firstTable = [];
    var number = 1;
    for(var i=0;i<columns;i++)
    {
        var secondTable = [];
        for (var j=0;j<rows;j++)
        {
            secondTable.push(number);
            number++;
        }
        firstTable.push(secondTable);
    }
    return firstTable;
}   
create2DArray(4,4)
