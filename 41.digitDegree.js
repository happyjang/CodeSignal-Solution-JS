function digitDegree(n) {
    let result = 0;
    if (n < 10) {
        return 0;
    } else {
        //using while loop to replace the number with the sum of its digits until we get to a one digit number.
        while (String(n).length > 1) {
            n = String(n).split("").reduce((a, b) => Number(a) + Number(b));    
            result += 1;
        }
        
        return result;
    }
}
