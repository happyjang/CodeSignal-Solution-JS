function differentSymbolsNaive(s) {
    //creates a new Set object that returns the number of elements in an array.
    //Set objects are collections of values. You can iterate through the elements of a set in insertion order. 
    //A value in the Set may only occur once; it is unique in the Set's collection.
    let count = [...new Set(s)];
    
    return count.length;
} 

// function differentSymbolsNaive(s) {
// // The size accessor property returns the number of (unique) elements in a Set object.
//    return new Set(s).size
// }