function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    
//using map method to find check whether element and elemToReplace are the same value  
//replace all the occurrences of elemToReplace with substitutionElem 
//create a new array 
return inputArray.map(elem => elem === elemToReplace ? substitutionElem : elem )
}

//เปลี่ยน element ที่อยู่ใน array ด้วย element ใหม่ตามที่โจทย์กำหนด
//return array ใหม่ ที่มี element ตัวใหม่ใน array


