function extractEachKth(inputArray, k) {
    //using filter method to create a new array of integers that remove element(k) from it.
    return inputArray.filter((x , i) => (i + 1) % k !== 0)
}


// สร้าง array ใหม่ โดยลบตัวเลข หรือ element ตามที่โจทย์กำหนดออกไป
// .filter() สร้าง array ใหม่ ตามเงื่อนไขที่กำหนด



// 
//array.filter(function(currentValue, index, arr), thisValue)
//filter() method creates an array filled with all array elements that pass a test