function findEmailDomain(address) {
    return address.split('@').pop();
}
// หา domain name จาก email ที่โจทย์กำหนด 
// .pop() ลบตัวท้าย 
