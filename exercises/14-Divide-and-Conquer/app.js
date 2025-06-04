let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(integers){
    let odd = [];
    let even = [];
    for(let int of integers){
        if(int%2===0){
            even.push(int);
        }else if(int%2!==0){
            odd.push(int);
        }
    }
    return odd.concat(even);
}