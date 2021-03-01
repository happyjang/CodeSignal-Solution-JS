function arrayMaximalAdjacentDifference(inputArray) {
    
    let maxDiff = 0;
    
    //using for loop to find differnce value between two numbers
    //change negative value to absolute value by using Math.abs method
    for (let i = 0; i < inputArray.length; i++) {
        let diff = Math.abs(inputArray[i+1] - inputArray[i]);
        maxDiff =  diff > maxDiff ? diff : maxDiff ;
        console.log(diff)
    }
    return maxDiff;
}

//Math.abs() เปลี่ยนเลขติดลบ ให้เป็นเลขปรกติ
//หาผลต่างมากที่สุด ของตัวเลขที่อยู่ติดกัน
//return ค่าต่างที่มากที่สุด



function arrayMaximalAdjacentDifference(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i])))
}
