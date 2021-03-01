function longestWord(text) {
    let word = text.split(/\W/);
    word.sort((a,b) => a.length - b.length);
    console.log(word)
    return word.pop();
}


// หาคำที่ยาวที่สุด ที่อยู่ในโจทย์ string ที่กำหนด แล้ว return คำที่ยาวที่สุดดังกล่าวออกมา


// function longestWord(text) {
//     return text.match(/[a-zA-Z]+/g).reduce((a, v) => v.length > 1 && v.length > a.length ? v : a, '');   
// }

