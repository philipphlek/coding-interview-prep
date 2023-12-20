/*
https://www.algoexpert.io/questions/transpose-matrix

Transpose Matrix
Difficulty: Easy  
Category: Arrays

You're given a 2D array of integers matrix. Write a function that returns the 
transpose of matrix.

The transpose of a matrix is a flipped version of the original matrix across 
its main diagonal (which runs from top left to bottom right); it switches the 
row and column indices of the original matrix.

Sample Input #1
matrix = [
  [1, 2],
]

Sample Output #1
[
  [1],
  [2],
]

Sample Input #2
matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
]

Sample Output #2
[
  [1, 3, 5],
  [2, 4, 6],
]

Sample Input #3
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

Sample Output** #3
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
]
*/

// O(w * h) time | O(w * h) space
export function transposeMatrix(matrix: number[][]) {
  let newMatrix: number[][] = []
  for (let col = 0; col < matrix[0].length; col++) {
    newMatrix[col] = []
    for (let row = 0; row < matrix.length; row++) {
      newMatrix[col][row] = matrix[row][col]
    }
  }
  return newMatrix
}
