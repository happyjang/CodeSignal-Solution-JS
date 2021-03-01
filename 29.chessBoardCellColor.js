//ตารางหมากรุก
//เช็คว่าช่องที่โจทย์กำหนด สองช่องดังกล่าว มีสีเดียวกันหรือไม่
//return boolean

function chessBoardCellColor(cell1, cell2){
    let obj = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    }
    let isEven = num => num % 2 == 0
    let cell1Color; 
    let cell2Color; 
    // if both coordinates are even or both are odd, the cell is black
    // if the coordinates are the same the cell is black
    // else the cell is white
    if(isEven(obj[cell1[0]]) && isEven(cell1[1])){
        cell1Color = 'black'
    }
    else if(obj[cell1[0]] == cell1[1]){
        cell1Color = 'black'
    }
    else if(!isEven(obj[cell1[0]]) && !isEven(cell1[1])){
        cell1Color = 'black'
    }
    else {
        cell1Color = 'white'
    }

    if(isEven(obj[cell2[0]]) && isEven(cell2[1])){
        cell2Color = 'black'
    }
    else if(!isEven(obj[cell2[0]]) && !isEven(cell2[1])){
        cell2Color = 'black'
    }
    else if(obj[cell2[0]] == cell2[1]){
        cell2Color = 'black'
    }
    else {
        cell2Color = 'white'
    }
    
    return cell1Color == cell2Color
}


// function chessBoardCellColor(cell1, cell2) {
//     //charCodeAt() method returns the Unicode of the character at the specified index in a string
//     let black = cell1.charCodeAt(0) + cell1.charCodeAt(1);
//     console.log(black)
//     let white = cell2.charCodeAt(0) + cell2.charCodeAt(1);
//     console.log(white)
//     return black % 2 === white % 2;
// }