// Your code here
function matrixBuilder(size){
    let matrix = [];
    for(let row = 0; row < size; row++){
        let rowArray = [];
        for(let col = 0; col < size;col++){
            rowArray.push(Math.floor(Math.random()*2));
        }
        matrix.push(rowArray);
    }

    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
