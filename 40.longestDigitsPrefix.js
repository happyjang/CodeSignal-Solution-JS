function longestDigitsPrefix(inputString) {
    
    //split a string into an array
    let array = inputString.split("")
    //create the objects
    let digits = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" ]
    let prefix = []
    //loop thru array to find the digits
    for (let i = 0; i < array.length; i++) {
        if (digits.includes(array[i]) === false) {
            break;
        }
        prefix.push(array[i])
    }
    return prefix.join("") 
}

// function longestDigitsPrefix(inputString) {
//     return inputString.match(/^\d*/)[0]
// }
