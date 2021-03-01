function minesweeper(matrix) {
    
  // determine matrix size
  let numRows = matrix.length, numCols = matrix[0].length; 
  
  // coordinate changes for all 8 directions
  let directions = [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];
  
  // initiate results table with 0s
  let results = matrix.map(row => row.map(cell => 0)); 
  
    // for each row
    matrix.forEach((rowOfCells, matrixRowNum) => { 
        
    // for cell in each row
    rowOfCells.forEach((cell, matrixColNum) => { 
        
      // if that cell contains a true value  
      if (cell) { 
        
        // iterate through all dir'ns
        directions.forEach(dir => { 
            
          // vertical position in results table
          let resultsRowNum = matrixRowNum + dir[0]; 
          
          // horizontal position in results table
          let resultsColNum = matrixColNum + dir[1]; 
          
          // if this is a valid position in the results table, i.e. not off the edge
          if (
            resultsRowNum >= 0       &&
            resultsRowNum <  numRows &&
            resultsColNum >= 0       &&
            resultsColNum <  numCols
          ) { 
            
            // then increment the value found there
            results[resultsRowNum][resultsColNum] += 1; 
          }
        });
      }
    });
  });
  return results;
}


