function messageFromBinaryCode(code) {
    let message = "";
    let codeArray = Array.from(code);
    while(codeArray.length > 0) {
        message += String.fromCharCode(parseInt(codeArray.splice(0, 8).join(""), 2));   
    }
    return message;
}
// ถอดรหัสเป็นข้อความ
// ASCII ( American Standard Code for Information Interchange ) รหัส 8 บิตที่ต่อเนื่องกัน มีแค่ตัวเลข 0 และ 1
// array.from( ) ใช้แยก เช่น "Hello" => H,e,l,l,o
// String.fromCharCode( ) เปลี่ยน unicode ให้เป็นตัวอักษร 


// function messageFromBinaryCode(code) {
//     return code.match(/.{1,8}/g).reduce((a, v) => a += String.fromCharCode(parseInt(v, 2).toString(10)), '')
// }