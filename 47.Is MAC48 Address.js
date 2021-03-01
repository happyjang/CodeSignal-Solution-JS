// เช็คว่าโจทย์ที่ให้มา เป็นเลข media access control address (MAC address) หรือไม่
// MAC address จะเป็นตัวเลข 0-9 หรือตัวอักษร A-F จับเป็นคู่ๆ ( ห้ามผสมเลขกับอักษร ) จำนวน 6 คู่ แบ่งด้วย - 
// return boolean
// Array.from( ) แยกเป็น object เช่น Array.from("ABCDEFG") => A,B,C,D,E,F,G

function isMAC48Address(inputString) {
    
    if(inputString.length != 17)
    return false;
    
    let arrStr = Array.from(inputString);
    let allowed = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    console.log(arrStr)
    if(arrStr.filter(i=>i=="-").length != 5) return false;
    return arrStr.every(i=>{
        return i == "-" || allowed.indexOf(i) != -1;
    });    
}

// function isMAC48Address(inputString) {
    
//     return inputString.split("-").map(b => "0x" + b).every(b => !isNaN(b)) 
//     && inputString.length == 17
// }

// function isMAC48Address(inputString) {
//     let g = inputString.split('-');
//     if (g.length != 6) {
//         return false;
//     }
//     return g.filter(x => x.match(/^[0-9a-fA-F]{2}$/gm)).length === 6;
// }

