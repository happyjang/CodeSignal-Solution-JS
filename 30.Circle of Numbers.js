function circleOfNumbers(n, firstNumber) {
    
    //checking the opposite of each number//
     
    return ( n / 2 + firstNumber )  % n
}

//หาค่าที่อยู่ตรงข้ามของวงกลม (คล้ายตัวเลขบนนาฬิกา) 
//โดยโจทย์จะกำหนดจำนวนตัวเลขทั้งหมด และ ตัวเลขเริ่มต้นไว้ให้

// function circleOfNumbers(n, firstNumber) {
    
//     //checking the opposite of each number//
//     let opposite = n / 2 + firstNumber;
//     //make sure that the opposite we end up with is not larger than n. If it is then we need to subtract n from the number since the max number on the circle is n — 1.
//     return opposite > n - 1 ? opposite - n : opposite;
// }