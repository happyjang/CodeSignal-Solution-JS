//หาจำนวนเต็มบวกที่น้อยที่สุด (เช่นมากกว่า 0) จำนวนเต็มผลคูณที่มีตัวเลขเท่ากับผลคูณ หากไม่มีจำนวนเต็มดังกล่าวให้ส่งกลับ -1 แทน

function digitsProduct(product) {
    if (product == 0) return 10;
    if (product == 1) return 1;
    var divisor = 10,
        power = 1,
        result = 0;
    while (product > 1) {
        if (--divisor == 1) return -1;
        while (product % divisor == 0) {
            product /= divisor;
            result += divisor * power;
            power *= 10;
        }
    }
    return result;
}




// function digitsProduct(product) {
    
//         for(let i = 1; i <= 9999; i++){
        
//         let c = i.toString().split('').reduce((a,v) => a * Number(v), 1);
        
//         if(c === product){
//             return i;
//         }
//     }
//     return -1;
// }