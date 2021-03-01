function isLucky(n) {
    
    //change integer to string then split each number in array. //
    n = String(n).split('')
    
    //divide two group of number.//
    let half = n.length/2
        let firstHalf = n.slice(0, half)
    let secondHalf = n.slice(half, n.length)
    //console.log("half:" , n.length/2 )//
    
    let firstSum = 0
    let secondSum = 0
    
    //change string to integer then loop thru each element and adding each element together.// 
    for (let i = 0; i < half; i++) {
        firstSum = firstSum + parseInt(firstHalf[i])
    }
    
    for (let i = 0; i < half; i++) {
        secondSum = secondSum + parseInt(secondHalf[i])
    }
    
     //if the sum of two groups are equal return true.//
    if(firstSum == secondSum){
        return true
    } else {
        return false
    }
}

// หา lucky number ใน array โดยแบ่งครึ่งหน้า / ครึ่งหลัง แล้วหาผลรวมของครึ่งหน้า / ครึ่งหลัง 
// ถ้าผลรวมทั้งสองส่วนออกมาเท่ากัน คือ lucky number ให้แสดงค่า boolean : true , แต่ถ้าหากไม่เท่ากัน : false


// function isLucky(n) {
//     const arr = String(n).split('');

//     const firstHalf = sum(arr.slice(0, arr.length / 2));
//     const secondHalf = sum(arr.slice(arr.length / 2));

//     return firstHalf === secondHalf;
// }

// function sum(arr) {
//   return arr.reduce((prev, current) => {
//     const _current = parseInt(current, 0);

//     return prev += _current
//   }, 0)
// }


