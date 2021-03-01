function addBorder(picture) {
    
    //create a new array that has " * " between letters by using map method
    let a = picture.map(x => "*" + x + "*");
    
    //copying " * " by using repeat method thru length of array
    //add " * " to the top and bottom of the array by using unshift and push method.
    a.unshift("*".repeat(a[0].length));
    a.push("*".repeat(a[0].length));
    
    return a;
}

//เพิ่มเส้นขอบใน array ที่ให้มา โดยใส่เครื่องหมายดอกจัน (*) ลงไป


// function addBorder(picture) {
//     picture = picture.map( i => '*'.concat( i,'*') )
//     let x = picture[0].length;
//     picture.unshift(Array(x).fill('*').join(''));
//     picture.push(Array(x).fill('*').join(''))
//     return picture;
// }
