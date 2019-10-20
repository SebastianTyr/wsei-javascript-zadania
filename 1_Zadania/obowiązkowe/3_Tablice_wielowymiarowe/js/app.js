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

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
