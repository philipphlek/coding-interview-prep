/*
https://www.algoexpert.io/questions/validate-subsequence

Validate Subsequence
Difficulty: Easy  
Category: Arrays

Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers [1, 3, 4] form a subsequence of the array
[1, 2, 3, 4], and so do the numbers [2, 4]. Note
that a single number in an array and the array itself are both valid
subsequences of the array.

Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Sample Output
true
*/

// O(n) time | O(1) space
export function isValidSubsequence(array: number[], sequence: number[]) {
  let seqIndex = 0
  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    const seqNum = sequence[seqIndex]
    if (num === seqNum) {
      seqIndex++
    }
    if (seqIndex === sequence.length) {
      return true
    }
  }
  return false
}
