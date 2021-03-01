function isIPv4Address(inputString) {
    
//using regular expressions to check valid input string
//using test method to return a boolean value
return   /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$)){4}$/.test(inputString);
}

//เช็ค IP address ว่าตรง format หรือไม่
// return boolean
