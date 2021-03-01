//เช็คว่า variable จามโจทย์ มีแต่ ตัวอักษร / ตัวเลข / underscore เท่านั้น 
//ห้ามขึ้นต้นด้วยตัวเลข และเครื่องหมายอื่นๆ 
//return boolean

function variableName(name) {
    let first = name.charAt(0).toUpperCase();
    if((first < 'A' 
    || first > 'Z') 
    && (first !== '_')) {
        return false;
    }
    return name.slice(1, name.length)
        .split("")
        .every(char => (char >= 'a' && char <= 'z') 
        || (char >= 'A' && char <= 'Z') 
        || char == '_' 
        || (char >= '0' && char <= '9'));
}

// function variableName(name) {
// return /([a-zA-Z_])/.test(name.charAt(0)) && !/\W/.test(name);

// }


// function variableName(name) {
//   let array = name.split('');
//   for(let i = 0 ; i < array.length; i++) {
//     if (i === 0 && isDigit(array[i]))
//       return false;
//     if (!(isDigit(array[i]) || isLetter(array[i]) || isUnderscore(array[i])))
//       return false;
//   }
//   return true;
// }

// function isDigit(c) {
//   return '0123456789'.indexOf(c) !== -1;
// }

// function isUnderscore(c) {
//   return '_'.indexOf(c) !== -1;
// }

// function isLetter(c) {
//   return c.toLowerCase() != c.toUpperCase();
// }

