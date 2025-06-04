let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
par = par.toLowerCase();
for(let char of par){
    if(char !== ' '){
        if(Object.hasOwn(counts,char)){
            //update the number  by 1
            counts[char] += 1;
        }else{
            //add the char as a key to counts
            counts[char] = 1;
        }
    }
}

console.log(counts);
