function depositProfit(deposit, rate, threshold) {
    
    //using while loop to check whether deposit is lower than threshold.
    // once the deposit is greater than the threshold, it stops
    let years = 0
    while (deposit < threshold) {
        deposit += deposit * (rate/100);
        years++;
        //console.log(" year list: " , years )
    }
    //console.log(" total: " , years )
    return years;
}

//โจทย์กำหนดมูลค่าเงินที่ฝากไว้ในธนาคาร พร้อมอัตราดอกเบี้ยต่อปีที่ได้รับ
//หาจำนวนปีที่ฝากเงินไว้ในธนาคาร จนได้มูลค่าเงินฝาก + ดอกเบี้ยตามที่โจทย์กำหนด
//return จำนวนปี