function arrayChange(inputArray) {
    
    let count = 0;
  
  //using while loop inside for loop to compare value between two index 
  
    for (let i = 0; i < inputArray.length; i++) {

//if value in the second index is lower or equal the first one then add 1 per time until increasing exactly one of its element by one.
    while (inputArray[i] >= inputArray[i + 1]) {
      count++;
      inputArray[i + 1]++;
    }
  }
  return count;
}

// function arrayChange(inputArray) {
//   let moves = 0;
//   const series = inputArray;
//   for (let i = 1; i < series.length; i += 1) {
      
//     if (series[i] <= series[i - 1]) {
//       const diff = (series[i - 1] - series[i]) + 1;
//       series[i] += diff;
//       moves += diff;
      
//       //console.log("moves: " , moves)
      
//       //console.log("diff:" , diff )
//       //console.log("moves: " , moves)
//     }
//   }
  
//   //console.log(series)

//   return moves;
// }
