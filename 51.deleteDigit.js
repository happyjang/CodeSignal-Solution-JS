function deleteDigit(n) {
    return n.toString().split('').reduce((a, v, i) => {
        let nx = n.toString().split('');
        nx.splice(i, 1);
        nx = parseInt(nx.join(''));
        if (nx > a) {
            a = nx;
        }
        return a;
    }, 0);
}
// โจทย์กำหนดตัวเลขตั้งต้นมาให้  ให้หาค่าที่มากที่สุดว่า หากลบตัวเลขออก 1 ตัว แล้ว return ค่านั้นออกมา

