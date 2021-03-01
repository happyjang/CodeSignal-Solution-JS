function electionsWinners(votes, k) {
    let maxVote = Math.max(...votes);
    if (k === 0) {
        return votes.indexOf(maxVote) === votes.lastIndexOf(maxVote) ? 1 : 0;
    }
    return votes.reduce((a, v, i) => {
        if (v + k > maxVote) {
            a += 1;
        }
        return a;
    }, 0);
}
// หาผู้มีสิทธิ์ชนะเลือกตั้ง
// โจทย์กำหนด คะแนนผู้สมัครเลือกตั้งแต่ละรายใน array  พร้อมกำหนดจำนวนคนที่ยังไม่ได้ลงคะแนนเอาไว้
// ให้หาว่า หากรวมคะแนนจากผู้ที่ยังไม่ได้ลงคะแนน จะมีจำนวนผู้ที่มีสิทธิ์ชนะเลือกตั้งกี่คน return จำนวนนั้นออกมา
// กรณีที่รวมแล้ว มีคนที่ได้คะแนนเสียงเท่ากัน ให้ return 0 เพราะถือว่าไม่มีใครชนะเลือกตั้ง
// .indexOf ( ) รีเทิร์นค่า index ใน array นับจากหัวไปหาง
// .lastIndexOf ( ) รีเทิร์นค่า index ใน array นับจากหางไปหัว



// function electionsWinners(votes, k) {
//      // find the most voted
//     let maxVote = Math.max(...votes);
    
//     let count = 0
    
//     // if there are no votes left
//     if (k === 0) {
        
//         // if the most voted is unique return 1
//         //   otherwise 0
//         for (vote of votes)
//             if (vote === maxVote)
//                 count ++
        
//         return count === 1 ? 1 : 0
//     }

//     // those who added all the remaining votes can surpass the most voted could potentially win
//     for (vote of votes)
//         if (maxVote < vote + k)
//             count++
    
//     return count;
// }
