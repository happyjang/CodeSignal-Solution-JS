function buildPalindrome(st) {
let palindrome = st;
    let character = st.length - 1;
    while (palindrome.split('').reverse().join('') != palindrome) {
        palindrome = st + st.slice(0, -character).split('').reverse().join('');
        character--;
    }
    return palindrome;
}
//สร้าง คำ วลี ที่สามารถอ่านจากหลังไปหน้าหรือหน้าไปหลังแล้วมีความหมายเหมือนกัน โดยเพิ่มตัวอักษรที่จำเป็นลงไป
// return string ใหม่ที่เป็น palindrome
