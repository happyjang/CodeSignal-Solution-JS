function chessKnight(cell) {
    let n = Number(cell[1]);
    let l = cell[0].charCodeAt() - 96;
    return (8 - n >= 2 && l + 1 <= 8) 
    + (8 - n >= 1 && l + 2 <= 8) 
    + (n - 1 >= 1 && l + 2 <= 8) 
    + (n - 2 >= 1 && l + 1 <= 8) 
    + (n - 2 >= 1 && l - 1 >= 1) 
    + (n - 1 >= 1 && l - 2 >= 1) 
    + (n + 1 <= 8 && l - 2 >= 1) 
    + (n + 2 <= 8 && l - 1 >= 1);
}

// function chessKnight(cell) {
//  let possibleCoordinates = [];
//     let xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//     let cellX = xCoordinates.indexOf(cell[0]) + 1; //The X Position
//     let cellY = parseInt(cell[1]); //The Y Position
    
//     //Find all possible X Positions
//     let cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
//         return (cellPosition > 0 && cellPosition < 9);
//     })
    
//     //Find all possible Y Positions
//     let cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
//         return (cellPosition > 0 && cellPosition < 9);
//     })
    
//     //We now have 2 seperate arrays: One for X Positions, One for Y Positions.
//     //Go thru every combination possible and if it is a valid position then push it
//     //to the possible coordinates array - if not present already.
//     //The trick is to validate the position pair (X, Y) by making sure that 
//     //the net X distance plus net Y distance is 3
//     for (let i = 0; i < cellXpositions.length; i++) {
//         for (let j = 0; j < cellYpositions.length; j++) {
//             if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
//                 console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
//                 if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
//                     possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
//                 } 
//             }
//         }
//     }
//     console.log('Possible Coordinates:', possibleCoordinates);
//     console.log ('Possible Moves:', possibleCoordinates.length);
//     return possibleCoordinates.length;
// }

