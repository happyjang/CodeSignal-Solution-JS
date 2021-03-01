function palindromeRearranging(inputString) {
    
// First get the character count for each character in the string and store it in an object.
// The string can only be a palindrome if either the count of ALL characters is even 
// or if the count of ONLY ONE character is odd.
  let charCounts = [...inputString].reduce((counts, char) => {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    console.log(counts[char])
      return counts;
  }, {});
  //เช็คว่า string ที่โจทย์กำหนด สามารถเรียงสลับที่ได้หรือไม่ 
//return boolean

  
// Filter the object values down to just the odd character counts. 
// If the resulting array's length is 0 or 1, the string can be a palindrome. 
  
  return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1;
}

// function palindromeRearranging(inputString) {
//     return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
// }

// function palindromeRearranging(inputString) {
//     let palindrome = true;
//     let center = 0;
//     let array = inputString.split("");
//     while (palindrome && array.length > 0) {
//         if(array.indexOf(array[0], 1) > 0)
//             array.splice(array.indexOf(array[0],1),1);
//         else
//             if(center < 1 )
//                 center++;
//             else 
//                 palindrome = false;
//         array = array.slice(1);
        
//     }
//     return palindrome;
// }

// function palindromeRearranging(inputString) {

//     let sw = ( inputString.length % 2 != 0) ? true : false;
//     let alphabet;
//     let stringNum;
//     while (inputString.length != 0) {
//     alphabet = inputString.charAt(0);
//     stringNum = inputString.match(new RegExp(alphabet, "g")).length;
//     inputString = inputString.replace(new RegExp(alphabet,'gi'),"");

//     if (stringNum%2 != 0 && !sw) {
//     return false;
//     }

//     if (stringNum%2 != 0 && sw) {
//     sw = false;
//     }

// }

// return true;
// }




//function palindromeRearranging(inputString) {
// let newInput = inputString.split("").reverse().join("")
// return  inputString === newInput ?  true : false
// }
