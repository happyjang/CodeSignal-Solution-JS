function absoluteValuesSumMinimization(a) { 
    
    //check whether the total numbers are even or not.
    let isArrayEven = a.length % 2 === 0;
    //console.log(a.length)
    return isArrayEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
    
}
// หา variable ใน array ที่โจทย์กำหนด ซึ่งเมื่อนำไปแทนค่า x ใน abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)  แล้วได้ผลลัพท์ที่ต่ำที่สุด //
// abs( ) คือ method ที่เปลี่ยนตัวเลขติดลบให้เป็นเลขปรกติ //


// Simply above problem states, we have to pick a
//  so that if we sum the
// absolute of difference of every element in a array with x,
// that sum number will be minimum as compare to every other x.


//(Testing)

// a = [2, 4, 7]
// absoluteValuesSumMinimization(a);

// isEven = 3 % 2 = 0 === 0     => true

// then, the false part of the statement return will run,

// a[Math.floor(1.5)]      => a[1]    => 4

// returns 4;

// so the mean is 4