/*
https://www.algoexpert.io/questions/binary-search

Write a function that takes in a sorted array of integers as well as a target integer. 
The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise `-1`.

Sample Input
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33

Sample Output
3
*/

export function binarySearch(array: number[], target: number): number {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const middleNum = array[middle]
    if (middleNum === target) {
      return middle
    } else if (middleNum < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}
