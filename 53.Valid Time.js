function validTime(time) {
    let clock = time.split(':');
    console.log(clock)
    return Number((clock[0]) < 24 && Number(clock[1]) < 60) ? true : false
}

// เช็คว่า string ที่ให้มา ตรงกับรูปแบบของการแสดงผลนาฬิกาแบบ 24 ชั่วโมงหรือไม่
// return boolean

