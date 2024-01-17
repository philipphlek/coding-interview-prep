/*
https://www.algoexpert.io/questions/zero-sum-subarray

You're given an array of integers `nums`. Write a function that returns a 
boolean representing whether there exists a zero-sum subarray of `nums`.

A zero-sum subarray is any subarray where all of the values add up to zero. A
subarray is any contiguous section of the array. For the porposes of this
problem, a subarray can be as small as one element and as long as the original
array.

Sample Input
nums = [-5, -5, 2, 3, -2]

Sample Output
true // The subarray [-5, 2, 3] has a sum of 0
*/

export function zeroSumSubarray(nums: number[]) {
  const sumTracker = new Set<number>([0])
  let runningSum = 0
  for (const num of nums) {
    runningSum += num
    if (sumTracker.has(runningSum)) {
      return true
    }
    sumTracker.add(runningSum)
  }
  return false
}
