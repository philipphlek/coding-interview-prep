/*
Write a function that takes in an array of positive integers and returns the 
maximum sum of non-adjacent elements in the array.

If the input array is empty, the function should return `0`.

Sample Input
array = [75, 105, 120, 75, 90, 135]

Sample Output
330 // 75 + 120 + 135
*/

export function maxSubsetSumNoAdjacent(array: number[]) {
  let prev1 = 0,
    prev2 = 0
  for (let i = 0; i < array.length; i++) {
    const curr = Math.max(prev1 + array[i], prev2)
    prev1 = prev2
    prev2 = curr
  }
  return prev2
}
