function reverseInParentheses(inputString) {
    
    // using loop to look for ")" only if inputString has parentheses
    while (inputString.indexOf(")", 0) != -1) {
        
        //get the first index that has ")"
        var x = inputString.indexOf(")", 0)
        
        //get the last index that has "("
        var y = inputString.lastIndexOf("(", x)
        
        //remove all parentheses then reverse the letters
        var z = inputString.slice(y + 1, x).split("").reverse().join("")
        
        //add each letter into an array
        var inputString = inputString.slice(0, y) + z + inputString.slice(x + 1)
    }
     return inputString
}
// reverse สลับ string จากหลังไปหน้า โดยให้ตัดเครื่องหมายวงเล็บ ( ) ที่คั่นอยู่ออกให้หมด //




// function reverseInParentheses(inputString) {
//     reverseString = ['']
    
//     for(i of inputString)
//         if(i == ')') 
//             reverseString[reverseString.length - 2] += [...reverseString.pop()].reverse().join('')
    
//         else if(i == '(')
//             reverseString.push('')
    
//         else reverseString[reverseString.length - 1] += i            
            
//     return reverseString[0]
// }



// function reverseInParentheses(inputString) {
//     if (inputString.includes('(')){
//         return reverseInParentheses(reverseOnce(inputString));
//     } else {     
//         return inputString;
//     }
// }
// function reverseOnce(inputString){
//     let regexp = /\(([^()]*)\)/i;
//     let subStr = regexp.exec(inputString)[1];
//     subStr = subStr.split('').reverse().join('');
//     return inputString.replace(regexp, subStr)
// }
