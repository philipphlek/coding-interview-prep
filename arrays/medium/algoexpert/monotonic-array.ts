/*
https://www.algoexpert.io/questions/monotonic-array

Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. 
Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output
true
*/

export function isMonotonic(array: number[]) {
  if (array.length <= 2) {
    return true
  }
  let idx = 1
  let prevNum = array[0]
  let direction = 0
  while (idx < array.length && direction === 0) {
    const num = array[idx]
    if (num < prevNum) {
      direction = -1
    } else if (num > prevNum) {
      direction = 1
    }
    prevNum = num
    idx++
  }
  for (let i = idx; i < array.length; i++) {
    const num = array[i]
    if (
      (num < prevNum && direction === 1) ||
      (num > prevNum && direction === -1)
    ) {
      return false
    }
    prevNum = num
  }
  return true
}
