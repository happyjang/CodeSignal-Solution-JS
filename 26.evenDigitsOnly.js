function evenDigitsOnly(n) {
    //Change integer to string then split a string into an array 
    //check all value in array whether they are even
    return n.toString().split("").every( i => Number(i) % 2 === 0)   
 
}


