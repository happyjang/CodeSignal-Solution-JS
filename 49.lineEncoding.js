//โจทย์กำหนด string มาให้ เช่น aaabbbc
//นับจำนวนตัวอักษรที่ซ้ำกัน แล้วแสดงค่าออกมา 3a3b1c

function lineEncoding(s) {
    
        return s.split('').reduce((a, v, i, arr) => {
        if (arr[i - 1] === v) {
            if (!isNaN(parseInt(a.slice(-2, -1)))) {
                a = a.slice(0, -2) + (parseInt(a.slice(-2)) + 1) + v;
            } else {
                a = (a.slice(0, -1)) + 2 + v;
            }
        } else {
            a = a + v;
        }
        return a;
    });

}

// function lineEncoding(s) {
//     return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
// }

