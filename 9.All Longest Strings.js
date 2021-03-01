function allLongestStrings(inputArray) {
    
return inputArray.sort((a, b) => b.length - a.length).filter(m => m.length == inputArray[0].length)

}

//หาความยาวของแต่ละ string ใน array แล้ว return เฉพาะ string ที่มีความยาวมากที่สุดกลับมาใน array //

