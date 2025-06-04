let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

// Your code here
// mySampleArray.sort((a,b)=>-1);
let hold = [];
for(let i=mySampleArray.length-1;i >=0;i--){
    hold.push(mySampleArray[i]);
    console.log(mySampleArray[i]);
}