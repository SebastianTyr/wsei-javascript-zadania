//Tablice wielowymiarowe - Zadanie 0
function checkArray(arr){
    let outputArray = []
    arr.forEach(element => {
        if(element[0] % 2 == 0 && element[1] % 2 == 0){
            outputArray.push(true)
        }
        else{
            outputArray.push(false)
        }
    })
    console.log(outputArray)
}
checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ])

//Tablice wielowymiarowe - Zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

function printArray(task1Array){
    console.log(task1Array[3][2])
    console.log(task1Array[2].length)
    console.log(task1Array[4][2])
}
printArray(task1Array)

//Tablice wielowymiarowe - Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function printTask2Array(task2Array){
    for(let i = 0; i < task2Array.length; i++){
        console.log(i)
    }
    for(let i = 0; i < task2Array.length; i++){
        console.log(task2Array[i])
    }
    for(let i = 0; i < task2Array.length; i++){
        for(let j = 0; j < i.length; j++){
            console.log(task2Array[j])
        }
    }
}
printTask2Array(task2Array)

//Tablice wielowymiarowe - Zadanie 2
function print2DArray(array)
{
    array = []
    for(var i = 0; i < array.length; i++){
        array.push(i)
        for(var j = 0; j < i; j++){
            array.push(j)
        }
    }
    console.log(array[i][j])
}
print2DArray([[1,2], [3,4]]) // TODO