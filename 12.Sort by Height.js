function sortByHeight(a) {
    
    //Create (newArray) using filter method to find element in (a) that is not -1//
    let newArray = a.filter(height => height !== -1)
    
    //Create (sortArray) using sort method to sort element from smallest to greatest in (newArray)
    let sortArray = newArray.sort((a, b) => a-b)
    
    //using map method to return a new array:
    //if element is -1 then add -1 otherwise extracts the first element in (sortArray)//
    
    return a.map(height => height === -1? -1: sortArray.shift())    
}

// เรียงลำดับภายใน array จากน้อยไปหามาก โดยมีตัวคั่นที่เป็น fix number และ fix index (ตำแหน่ง) อยู่ด้วย //






// function sortByHeight(a) {
    

// let newArray = a.filter(num => num > -1).sort((a,b) => a-b)

// let height = []
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === -1) {
//         height.push(i)
//     }
// }
// for (let i = 0; i < height.length; i++) {
//     newArray.splice(height[i], 0 , -1)
// }
// return newArray
// }
