// หาตัวเลขตัวเดียวที่อยู่ด้านซ้ายมือสุด //
// for ( i of array ) ดึง element ใน array ออกมาใช้

function firstDigit(inputString) {
    
    //split each letter and number to array.
    array = inputString.split("")
    //loops through the values of an iterable object to find the leftmost digit that occurs in a given string.
    for( let element of inputString){
        if(element != " " 
        && (Number(element) 
        || Number(element) == 0)) 
        return element
    }
}

// function firstDigit(inputString) {
//     return inputString[inputString.search(/\d/)]

// }