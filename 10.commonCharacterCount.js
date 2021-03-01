function commonCharacterCount(s1, s2) {
    let total = 0;
    let newArrayS1 = s1.split("")
    let newArrayS2 = s2.split("")
    for (let i = 0; i < newArrayS1.length; i++) {
        let index = newArrayS2.indexOf(newArrayS1[i])
        if (index !== -1) {
            newArrayS2.splice(index, 1)
            total+=1
        }
    }
    return total
}
//หาจำนวนตัวอักษรที่ซ้ำกันระหว่าง 2 string แล้ว return จำนวนผลรวมของตัวอักษรที่ซ้ำกันดังกล่าว //


