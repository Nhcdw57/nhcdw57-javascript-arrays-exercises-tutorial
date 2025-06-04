let arr = [45,67,87,23,5,32,60];

// Your code here
let answer = [];
for(let value of arr){
    answer.unshift(value);
}
console.log(answer);