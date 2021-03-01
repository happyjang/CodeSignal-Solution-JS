function isBeautifulString(inputString) {
    
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  for(i = 1; i < alphabet.length; i++) {
    if(inputString.split(alphabet[i]).length-1 > inputString.split(alphabet[i-1]).length-1)
      return false;
  }
  return true;
}
//โจทย์กำหนดว่า string จะสวยงามก็ต่อเมื่อ เวลาเรียงอักษรใหม่ จาก a ไป b ตัวอักษรตัวถัดไปต้องไม่มากกว่าตัวอักษรข้างหน้า 
//return boolean 
