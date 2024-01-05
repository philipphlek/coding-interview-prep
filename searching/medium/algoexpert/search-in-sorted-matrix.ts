/*
https://www.algoexpert.io/questions/search-in-sorted-matrix

You're given a two-dimensional array (a matrix) of distinct integers and a
target integer. Each row in the matrix is sorted, and each column is also sorted;
the matrix doesn't necessarily have the same height and width.

Write a function that returns an array of the row and column indices of the target
if it's contained in the matrix, otherwise `[-1, -1]`.

Sample Input
matrix = [
  [1,  4,   7,   12,  15,  1000],
  [2,  5,   19,  31,  32,  1001],
  [3,  8,   24,  33,  35,  1002],
  [40, 41,  42,  44,  45,  1003],
  [99, 100, 103, 106, 128, 1004],
]
target = 44

Sample Output
[3, 3]
*/

type Range = [number, number]

// O(h + w)
export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  let row = 0
  let col = matrix[0].length - 1
  while (row <= matrix.length && col >= 0) {
    const num = matrix[row][col]
    if (num === target) {
      return [row, col]
    } else if (num < target) {
      row++
    } else {
      col--
    }
  }
  return [-1, -1]
}

// O(h * log(w)) - using binary search on each row
export function searchInSortedMatrix2(
  matrix: number[][],
  target: number
): Range {
  for (let row = 0; row < matrix.length; row++) {
    let left = 0
    let right = matrix[row].length - 1
    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      const num = matrix[row][middle]
      if (num === target) {
        return [row, middle]
      } else if (num < target) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }
  return [-1, -1]
}
