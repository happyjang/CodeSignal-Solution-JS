
//  หาความเป็นไปได้ ในการสลับกลุ่ม string ที่มีความยาวเท่ากัน โดยให้การเรียงตัวอักษรแตกต่างกันแค่เพียงแบบเดียว
function stringsRearrangement(inputArray){
    let ans = [inputArray.shift()];
    
    let compare = (s1,s2)=>{
        s1 = s1.split('');
        s2 = s2.split('');
        
        return 1 == s1.reduce((sum,c,i)=>{
           return sum += (c == s2[i])?0:1;
        },0);
    };
   
    for(rep=0; rep<2; rep++){    
        // add elements to the end
        for(i=0; i<inputArray.length; i++){
            if(compare(ans[ans.length-1],inputArray[i])){
                ans.push(inputArray[i]);
                inputArray.splice(inputArray.indexOf(inputArray[i]),1);
                i--;
            }
        }

        // add elements to the front
        for(i=0; i<inputArray.length; i++){
            if(compare(inputArray[i],ans[0])){
                ans.unshift(inputArray[i]);
                inputArray.splice(inputArray.indexOf(inputArray[i]),1);
                i--;
            }
        }

        // insert elements between
        for(i=0; i<inputArray.length; i++){
            ans.forEach((a,j)=>{
                if(ans[j+1] && compare(a,inputArray[i]) && compare(inputArray[i],ans[j+1])){
                    ans.splice(j+1,0,inputArray[i]);
                    inputArray.splice(inputArray.indexOf(inputArray[i]),1);
                    i--;
                }
            });
        }
    }
    
    // edge case where compare only true with one potential neighbor
    // this means the remaining element has to go on an end
    if(inputArray.length != 0){
        for(i=0; i<inputArray.length; i++){
            ans.forEach((a,j)=>{
                if(compare(a,inputArray[i])){
                    for(k=j; k<ans.length-1; k++){
                        if((!ans[k+2] || compare(ans[k],ans[k+2])) && (!ans[k-1] || compare(ans[k-1],ans[k+1]))){
                            ans[k] = ans.splice(k+1, 1, ans[k])[0];
                        }
                    }
                }
            });
        }
        // add elements to the end
        for(i=0; i<inputArray.length; i++){
            if(compare(ans[ans.length-1],inputArray[i])){
                ans.push(inputArray[i]);
                inputArray.splice(inputArray.indexOf(inputArray[i]),1);
                i--;
            }
        }
    }
   
    return inputArray.length == 0;
}

// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;
// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// function stringsRearrangement(inputArray) {
//     var permArr = [],
//     usedChars = [];
//     function permute(input) {
//         var i, ch;
//         for (i = 0; i < input.length; i++) {
//             ch = input.splice(i, 1)[0];
//             usedChars.push(ch);
//             if (input.length == 0) {
//             permArr.push(usedChars.slice());
//             }
//             permute(input);
//             input.splice(i, 0, ch);
//             usedChars.pop();
//         }
//         return permArr
//     };
//     function satisfied(combo) {
//         var diff = 0;
//         for(var i=0;i<combo.length-1;i++) {
//             for(var j=0;j<combo[i].length;j++) {
//                 if(combo[i][j] !== combo[i+1][j])
//                     diff++;
//             }
//             if(diff !== 1) {
//                 return false;
//             }
//             diff = 0;
//         }
//         return true;
//     }
//     var combos = permute(inputArray);
//     return combos.some((combo) => {
//         return satisfied(combo);
//     });
// }

// function stringsRearrangement(a) {
//   for (let i = 0; i < a.length; i++) {
//     let remaining = findNext(a[i], a);
//     if (remaining.length === 0) return true;
//   }
//   return false;
// }

// function findNext(current, a) {
//   if (a.length === 0) return a;
//   for (let i = 0; i < a.length; i++) {
//     if (differsByOneChar(current, a[i])) {
//       let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
//       if (remaining.length === 0) return remaining;
//     }
//   }
//   return a;
// }

// function differsByOneChar(s1, s2) {
//   let mismatches = 0;
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) mismatches++;
//     if (mismatches > 1) break;
//   }
//   return mismatches === 1;
// }