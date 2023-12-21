/*
https://www.algoexpert.io/questions/three-number-sum

Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in the
array that sum up to the target sum and return a two-dimensional array of all
these triplets. The numbers in each triplet should be ordered in ascending order,
and the triplets themselves should be ordered in ascending order with respect to
the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty
array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/

type Triplet = [number, number, number]

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b)

  const triplets: Triplet[] = []
  for (let i = 0; i < array.length - 2; i++) {
    const num1 = array[i]
    let left = i + 1
    let right = array.length - 1
    while (left < right) {
      const num2 = array[left]
      const num3 = array[right]
      const sum = num1 + num2 + num3
      if (sum === targetSum) {
        triplets.push([num1, num2, num3])
        left++
        right--
      } else if (sum < targetSum) {
        left++
      } else {
        right--
      }
    }
  }
  return triplets
}
