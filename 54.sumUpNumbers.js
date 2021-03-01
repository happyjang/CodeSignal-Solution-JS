function sumUpNumbers(inputString) {
    let arr = inputString.match(/[0-9]+/g)
    let sum = 0
    if (arr && arr.length > 0) {
    arr.map(x => sum += parseInt(x))
  }
  return sum
}
    
// หาผลรวมของตัวเลขตามโจทย์ string ที่กำหนด
  


// function sumUpNumbers(inputString) {
//     if (!inputString.match(/[\d]+/g)) {
//         return 0;
//     }
//     return inputString.match(/[\d]+/g).reduce((a, v) => Number(a) + Number(v), 0);
// }