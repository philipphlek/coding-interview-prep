/*
https://www.algoexpert.io/questions/sorted-squared-array

Sorted Squared Array
Difficulty: Easy  
Category: Arrays

Write a function that takes in a non-empty array of integers that are sorted in ascending order
and returns a new array of the same length with the squares of the original integers also sorted
in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8, 9]

Sample Output
[1, 4, 9, 25, 36, 64, 81]
*/

// O(n) time | O(n) space
export function sortedSquaredArray(array: number[]) {
  let sortedSquared = Array(array.length)
  let sortedSquaredIndex = sortedSquared.length - 1
  let leftIndex = 0
  let rightIndex = array.length - 1
  while (leftIndex <= rightIndex) {
    const leftNum = array[leftIndex]
    const rightNum = array[rightIndex]
    const leftSquared = leftNum * leftNum
    const rightSquared = rightNum * rightNum
    if (leftSquared < rightSquared) {
      sortedSquared[sortedSquaredIndex] = rightSquared
      rightIndex--
    } else {
      sortedSquared[sortedSquaredIndex] = leftSquared
      leftIndex++
    }
    sortedSquaredIndex--
  }
  return sortedSquared
}
