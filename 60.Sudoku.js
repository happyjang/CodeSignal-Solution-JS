// Given a two-dimensional 9 x 9 array, returns true if a valid Sudoku solution
// เกมที่มีตัวเลขของแนวนอนและแนวตั้ง (1-9) ไม่ซ้ำกัน
// return boolean


function sudoku(grid) {
  let isValid = true

  grid.forEach((row) => {
    if (
      !(row.includes(1)) ||
      !(row.includes(2)) ||
      !(row.includes(3)) ||
      !(row.includes(4)) ||
      !(row.includes(5)) ||
      !(row.includes(6)) ||
      !(row.includes(7)) ||
      !(row.includes(8)) ||
      !(row.includes(9)) ||
      row.length !== 9
    ) {
      isValid = false
    }
  })

  let transGrid = grid[0].map((col, i) => grid.map(row => row[i]))

  transGrid.forEach((col) => {
    if (
      !(col.includes(1)) ||
      !(col.includes(2)) ||
      !(col.includes(3)) ||
      !(col.includes(4)) ||
      !(col.includes(5)) ||
      !(col.includes(6)) ||
      !(col.includes(7)) ||
      !(col.includes(8)) ||
      !(col.includes(9)) ||
      col.length !== 9
    ) {
      isValid = false
    }
  })

  function checkSubGrid(x1, x2, y1, y2) {
    let sub = []

    for (i = x1; i < x2; i++) {
      for (j = y1; j < y2; j++) {
        sub.push(grid[i][j])
      }
    }

    if (
      !(sub.includes(1)) ||
      !(sub.includes(2)) ||
      !(sub.includes(3)) ||
      !(sub.includes(4)) ||
      !(sub.includes(5)) ||
      !(sub.includes(6)) ||
      !(sub.includes(7)) ||
      !(sub.includes(8)) ||
      !(sub.includes(9)) ||
      sub.length !== 9
    ) {
      isValid = false
    }
  }

  checkSubGrid(0, 3, 0, 3)
  checkSubGrid(3, 6, 0, 3)
  checkSubGrid(6, 9, 0, 3)
  checkSubGrid(0, 3, 3, 6)
  checkSubGrid(3, 6, 3, 6)
  checkSubGrid(6, 9, 3, 6)
  checkSubGrid(0, 3, 6, 9)
  checkSubGrid(3, 6, 6, 9)
  checkSubGrid(6, 9, 6, 9)

  return isValid
}


// function sudoku(grid) {
//         let sg = [];
//         for (var i = 0; i < 9; i += 3) {
//             for (var j = 0; j < 9; j += 3) {
//                 sg.push([grid[i][j], grid[i][j + 1], grid[i][j + 2],
//                 grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
//                 grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
//             ]);
//             }
//         }
//     return grid.concat(sg, [...grid.map((v, i) => v.map((v1, j) => grid[j][i]))]).filter(v => v.sort().join('') != '123456789').length === 0;
// }