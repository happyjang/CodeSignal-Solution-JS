function avoidObstacles(inputArray) {
    
 // loop thru element inside array and using some method to find minimal length of the jump to avoid all the obstacles.
  let jump = 2;
  while (inputArray.some((obstacle) => obstacle % jump == 0)) {
    jump++;
  }
  return jump;
}


// function avoidObstacles(inputArray) {
    
// //check the maximum value inside array by using Math.max method.    
// let max = Math.max(...inputArray);
// // loop thru element to check if any 
//     for (let i = 1; i< max; i++) {
//         let divs = inputArray.some ( x => x % i == 0)
//         if(!divs) return i;
        
//     }
//     return max +1;
// }

//array.some(function(currentValue, index, arr), thisValue)
