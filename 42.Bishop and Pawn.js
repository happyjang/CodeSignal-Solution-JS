function bishopAndPawn(bishop, pawn) {
    //create object
    let obj = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    }
    //positions of a black
    pawn = [obj[pawn[0]], Number(pawn[1])]
    //positions of a white
    bishop = [obj[bishop[0]], Number(bishop[1])]
    //chech whether the bishop can capture the pawn in one move
    return Math.abs(pawn[0]-bishop[0]) == Math.abs(pawn[1]-bishop[1])
}


// function bishopAndPawn(bishop, pawn) {
//   return Math.abs(bishop[0].charCodeAt()-pawn[0].charCodeAt())===Math.abs(bishop[1]-pawn[1])
// }
