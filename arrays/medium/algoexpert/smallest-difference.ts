/*
https://www.algoexpert.io/questions/smallest-difference

Write a function that takes in two non-empty arrays of integers, finds the pair 
of numbers (one from each array) whose absolute difference is closest to zero, 
and returns an array containing these two numbers, with the number from the 
first array in the first position.

Note that the absolute difference of two integers is the distance between them
on the real number line. For example, the absolute difference of -5 and 5 is 10,
and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest
difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output
[28, 26]
*/

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let idx1 = 0
  let idx2 = 0
  let smallestDiffPair: number[] = []
  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    const num1 = arrayOne[idx1]
    const num2 = arrayTwo[idx2]
    const diff = Math.abs(num1 - num2)
    if (smallestDiffPair.length > 0) {
      if (diff < Math.abs(smallestDiffPair[0] - smallestDiffPair[1])) {
        smallestDiffPair = [num1, num2]
      }
    } else {
      smallestDiffPair = [num1, num2]
    }

    if (num1 < num2) {
      idx1++
    } else if (num2 < num1) {
      idx2++
    } else {
      return [num1, num2]
    }
  }

  return smallestDiffPair
}
