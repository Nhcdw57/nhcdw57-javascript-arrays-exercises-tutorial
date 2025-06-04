function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(let values of theArray){
		total += values;
	}

	return total;
}
let array = [1,2,3,4,5,6,7,8,9,10,0,54];
console.log(sumTheElements(array));
