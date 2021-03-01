function differentSquares(matrix) {
    let square = [];
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let x = 0; x < matrix[0].length - 1; x++) {
            square.push("" + matrix[i][x] + matrix[i][x + 1] + matrix[i + 1][x] + matrix[i + 1][x + 1]);
        }
    }
    return new Set(square).size;
}
// ให้หา matrix จากโจทย์ที่กำหนดให้   เปลี่ยนเป็น 2 x 2 ได้กี่แบบ