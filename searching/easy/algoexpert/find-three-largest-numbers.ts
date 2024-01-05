/*
https://www.algoexpert.io/questions/find-three-largest-numbers

Write a function that takes in an array of at least three integers and, without 
sorting the input array, returns a sorted array of the three largest integers in 
the input array.

The function should return duplicate integers if necessary; for example, it 
should return `[10, 10, 12]` for an input array of `[10, 5, 9, 10, 12]`.

Sample Input
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

Sample Output
[18, 141, 541]
*/

export function findThreeLargestNumbers(array: number[]) {
  const largestThree: (number | null)[] = [null, null, null]
  for (const num of array) {
    if (largestThree[2] === null || num > largestThree[2]) {
      updateLargestThree(largestThree, num, 2)
    } else if (largestThree[1] === null || num > largestThree[1]) {
      updateLargestThree(largestThree, num, 1)
    } else if (largestThree[0] === null || num > largestThree[0]) {
      updateLargestThree(largestThree, num, 0)
    }
  }
  return largestThree
}

function updateLargestThree(
  largestThree: (number | null)[],
  num: number,
  idx: number
) {
  for (let i = 0; i < idx; i++) {
    largestThree[i] = largestThree[i + 1]
  }
  largestThree[idx] = num
}
