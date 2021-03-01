// เช็คว่าโจทย์ที่ให้มาเป็นตัวเลขหรือไม่ รวมถึง 0
// return boolean
// isNan( ) เช็คว่าไม่ใช่ตัวเลขใช่ไหม is not a number 

function isDigit(s) {
    return (!isNaN(s));
}

// function isDigit(s) {
//     return (isNaN(s))? false : true;
// }



// function isDigit(symbol) {
//     return (parseInt(symbol) || parseInt(symbol) === 0) ? true : false;
// }

