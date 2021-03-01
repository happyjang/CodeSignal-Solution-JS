function matrixElementsSum(matrix) {
let total = 0;
    for (let i = 0; i < matrix[0].length; i++) {            
        for (let x = 0; x < matrix.length; x++) {
            if (matrix[x][i] === 0) {
                break;
            }
            total += matrix[x][i];
        }
    }
    return total;
}

//หาห้องที่ไม่อยู่ใต้ห้องผีสิง จากนั้นหาผลรวมของค่าเช่าห้องทั้งหมดที่ถูกเลือก//
    
// let total = 0;
    
//    for (let i=0; i<matrix.length; i++){
//      for (let j=0; j<matrix[i].length; j++){
//        if (matrix[i][j] === 0) {
//          for (let k=i+1; k<matrix.length; k++){
//            matrix[k][j] = 0;
//          }
//        }
//      }
//    }
    
//    for (let x=0; x<matrix.length; x++){
//      for (let y=0; y<matrix[x].length; y++){
//        total += matrix[x][y]
//      }
//    }    
//    return total;
// }
