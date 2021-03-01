
// จัด object ใหม่ โดยไม่ให้มีชื่อซ้ำ

function fileNaming(names) {
    for (i in names) {
        if (names.slice(0, i).includes(names[i])) {
            x = 1
            while (names.slice(0, i).includes(names[i] + "(" + x.toString() +")" )) {x++}
            names[i] += "(" + x.toString() + ")" }}
    return names
}

// function fileNaming(names) {
//     let namesArray = []
//     names.forEach((name) => {
//         if (namesArray.indexOf(name) === -1) {
//             namesArray.push(name)
//         } else {
//             if (namesArray.indexOf(`${name}(1)`) === -1) {
//                 namesArray.push(`${name}(1)`)
//             } else {
//                 let nextArray = 2
//                 while (namesArray.indexOf(`${name}(${nextArray})`) !== -1) {
//                 nextArray += 1
//                 }                

//         namesArray.push(`${name}(${nextArray})`)
//       }
//     }
//   })

//   return namesArray
// }
