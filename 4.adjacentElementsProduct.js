function adjacentElementsProduct(inputArray) {
    let maxValue = -Infinity  //Number.NEGATIVE_INFINITY
    for ( let i = 1; i < inputArray.length; i++ )
    {
        maxValue = Math.max(inputArray[i] * inputArray[i - 1], maxValue )
    }
    return maxValue
}
// adjacent คือ คู่ที่อยู่ติดกัน //
// ให้หาผลคูณที่มากที่สุดของคู่ที่อยู่ติดกัน แล้ว return ค่า product ของคู่นั้น //
