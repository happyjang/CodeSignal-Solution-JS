function boxBlur(image) {     
    let output = []
    let currentRow = []
    let horizontalMarker = 1
    let verticalMarker = 1
    
    while (verticalMarker < image.length -1){
        let average = 0
        average += Math.floor((image[verticalMarker][horizontalMarker] + 
            image[verticalMarker][horizontalMarker + 1] + 
            image[verticalMarker][horizontalMarker -1] + 
            image[verticalMarker + 1][horizontalMarker] + 
            image[verticalMarker - 1][horizontalMarker] + 
            image[verticalMarker - 1][horizontalMarker - 1] +
            image[verticalMarker - 1][horizontalMarker + 1] +
            image[verticalMarker + 1][horizontalMarker - 1] +
            image[verticalMarker + 1][horizontalMarker + 1])/9)
        currentRow.push(average)
        
        if(image[verticalMarker][horizontalMarker + 2] !== undefined){
            horizontalMarker++;
        }else{
            verticalMarker++;
            horizontalMarker = 1;
            output.push(currentRow)
            currentRow = []
        }
    }
    return output
    
}

//สูตรในการทำภาพเบลอ



// The following pseudocode implements a 3x3 box blur.
// Box blur (image)
// {
//     Declare newImage as a copy of the image;
//     For each pixel (x, y) on the image do:
//     {
//         // Kernel would not fit!
//         If x < 1 or y < 1 or x + 1 == width or y + 1 == height
//             Continue;
//         // Set P to the average of 9 pixels:
//            X X X
//            X P X
//            X X X
//         // Calculate average.
//         Sum = image[x - 1, y + 1] + // Top left
//               image[x + 0, y + 1] + // Top center
//               image[x + 1, y + 1] + // Top right
//               image[x - 1, y + 0] + // Mid left
//               image[x + 0, y + 0] + // Current pixel
//               image[x + 1, y + 0] + // Mid right
//               image[x - 1, y - 1] + // Low left
//               image[x + 0, y - 1] + // Low center
//               image[x + 1, y - 1];  // Low right

//         newImage[x, y] = Sum / 9;
//     }
//     Return newImage;
// }



// function boxBlur(image) {

// let sum = 0;
//   let blurred = [], line = [];
//   for (let x = 0; x + 3 <= image.length; x++) {
//     for (let y = 0; y+3 <=image[0].length; y++) {
//       sum = 0;
//       for (let i = x; i < 3 + x; i++) {
//         for (let j = y; j < 3 + y; j++) {
//           sum+=image[i][j];
//         }
//       }
//        line.push(Math.floor(sum / 9));
//     }
//     blurred[x]=line;
//     line=[];
//   }
//   return blurred;
// }
