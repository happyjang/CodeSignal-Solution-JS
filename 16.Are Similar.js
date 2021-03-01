function areSimilar(a, b) {
    
    //create two new array by using filter method to check whether they are similar  
    let firstArr = a.filter((x, i) => x !== b[i]);
    let secondArr = b.filter((x, i) => x !== a[i]);
    
    //return is.length === 0 || (is.length === 2 && is[0] === is[1]);
    return firstArr.length === 0 
    || (firstArr.length === 2 
    && firstArr.join('') === secondArr.reverse().join(''));
}
//เช็คสอง array ว่า element ที่เป็น number ด้านใน เหมือนกันหรือไม่ ( สลับตำแหน่งได้ ) 
// return boolean
