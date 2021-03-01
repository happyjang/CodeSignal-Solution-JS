function alphabeticShift(inputString) {
    
    //split each letter into array
    let array = inputString.split("");
    
    //loop thru each letter
    let shift = array.map((letter)=> {
        if (letter === 'z')
            return 'a';
        else
 
//fromCharCode() method converts Unicode values into characters
//charCodeAt() method returns the Unicode of the character at the specified index in a string.
            return String.fromCharCode(letter.charCodeAt(0)+1);
    })
    
    //convert to string
    return shift.join("");
}


        
// เปลี่ยน string ที่โจทย์กำหนด ให้เป็น string ใหม่ โดย แทนที่ตัวอักษรเดิม ด้วย ตัวอักษรถัดไป เช่น แทนที่ a ด้วย b เป็นต้น

// Unicode เป็นการกำหนดหมายเลขเฉพาะทางคอมพิวเตอร์ให้กับทุกตัวอักษร
// fromCharCode( ) เปลี่ยนตัวเลข unicode ให้เป็นตัวอักษร
// charCodeAt( ) หาค่า unicode ให้กับตัวอักษรตาม index ที่กำหนด เช่น "Hello" =>  str.charCodeat(0)  => "H" = 72

