function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1}
    
// Array Consecutive คือ การเรียงลำดับ เช่น จากน้อยไปมาก หรือมากไปน้อย
// หาจำนวนตัวเลข หรือ จำนวน element ใน array ที่จะทำให้การเรียงลำดับสมบูรณ์


// function makeArrayConsecutive2(statues) {
//     let newStatues = []
//     statues.sort((a,b) => a - b)
//     for ( let i = statues[0]; i <= statues[statues.length - 1]; i++)    {
//         newStatues.push(i)
//     }
//     return (newStatues.length - statues.length)
// }
