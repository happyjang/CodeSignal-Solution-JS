function arrayMaxConsecutiveSum(arr, k) {
    //replace the first index by using slice method then find the first sum. 
    sum = arr.slice(0, k).reduce((a,b) => a+b)
    max = sum;
   
    //loop thru the array to find the maximal possible sum.
    for (let i=k; i<arr.length; i++) {
        sum += arr[i] - arr[i-k]     
        max = Math.max(max, sum)
    }
    return max
}

// The reduce() method reduces the array to a single value.
// executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).

    
// function arrayMaxConsecutiveSum(inputArray, k) {
    
//     let maxSum = 0
//     let currentSum = 0
    
//     //using two loop to find 
//     for (let i = 0; i < k - 1; i++) {
//         currentSum += inputArray[i]
//         }
        
//         for (let i = k - 1; i < inputArray.length; i++) {
//             currentSum += inputArray[i]
            
//             if (currentSum > maxSum) {
//                 maxSum = currentSum
//                 }
//                 currentSum -= inputArray[i - k + 1]
//                 }
//                 return maxSum
// } 