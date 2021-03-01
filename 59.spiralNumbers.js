// โจทย์กำหนดตัวเลข n
// สร้างเมทริกซ์สี่เหลี่ยมขนาด N × N ที่มีจำนวนเต็มตั้งแต่ 1 ถึง N * N ตามลำดับเกลียวโดยเริ่มจากซ้ายบนและตามเข็มนาฬิกา

function spiralNumbers(n) {
    let arr = Array(n)
    let x = 0,
    y = n,
    total = n * n--,
    dx = 1, 
    dy = 0,
    i = 1, 
    j = 0
    
    while (y) arr[--y] = []
    while (i < total + 1) {
        arr[y][x] = i++
        x += dx
        y += dy
        
        if (++j == n) {
            if (dy < 0) {
                x++
                y++
                n -= 2
            }
        j = dx
        dx = -dy
        dy = j
        j = 0
        }
    }

  return arr
}