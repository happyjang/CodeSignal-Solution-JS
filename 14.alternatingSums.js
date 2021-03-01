function alternatingSums(a) {
    //Create array  
    let row = [0, 0]
    //using for/in loop to insert even/odd indexes into array
    for( i in a){
    //each iteration add more number        
        row[i%2] += a[i]    
    }
    return row
}
// แบ่ง ตัวเลข หรือ element ที่อยู่ใน array เดียว  ให้กลายเป็น 2 array โดยสลับ-แบ่งไปมาระหว่าง 2 array ตามลำดับ
//เช่น index หรือ element ตัวแรกไปอยู่ array ที่หนึ่ง , ตัวต่อไป ไปอยู่ array ที่สอง, ตัวต่อไป ไปอยู่ array ที่สาม เป็นต้น
// จากนั้นหาผลรวมตัวเลขในแต่ละ array แล้ว return ออกมา


// function alternatingSums(a) {
    
//     if (a.length === 1) return [...a, 0]
//     if (a.length === 2) return a
//     const teams = { a: [], b: [] }
//     a.forEach((weight, i) => {
//     i % 2 === 0 ? teams.a.push(weight) : teams.b.push(weight);
//   })
//   Object.keys(teams).forEach(key => {
//     teams[key] = teams[key].reduce((acc, val) => acc + val);
//   });
//   return Object.values(teams);
// }
