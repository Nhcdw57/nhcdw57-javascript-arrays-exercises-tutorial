let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(matrix){
  let state ={};
  state.totalSlots = totalMatrixSizePostFilter(matrix,value=>value==1 || value==2);
  state.availableSlots = totalMatrixSizePostFilter(matrix,value=>value==2);
  state.occupiedSlots = totalMatrixSizePostFilter(matrix,value=>value==1);
  return state;
}

function totalMatrixSizePostFilter(matrix,filter){
  return matrix.reduce((total,row)=>total+=row.filter(filter).length,0);
}


console.log(getParkingLotState(parkingState))
