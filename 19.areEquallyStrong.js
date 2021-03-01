function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    
    // using logical operators or / and to check if both of our arms are equally strong
    return ((yourLeft==friendsLeft)||(yourLeft==friendsRight))
    && ((yourRight==friendsLeft)||(yourRight==friendsRight))
}
//เทียบความแข็งแรงระหว่างแขนซ้ายขวาของเรา เท่ากับ แขนซ้ายขวาของเพื่อนหรือไม่ ( number )
//return boolean


// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     return (yourLeft+yourRight) === (friendsLeft+friendsRight) && (yourLeft === friendsLeft || yourLeft === friendsRight);
// }



// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
// if (((yourLeft==friendsLeft)||(yourLeft==friendsRight)) && ((yourRight==friendsLeft)||(yourRight==friendsRight))) {
//         return true
//     } else {
//         return false
//     }
// }
