/*
https://www.algoexpert.io/questions/two-number-sum

Two Number Sum
Difficulty: Easy  
Category: Arrays

Write a function that takes in a non-empty array of distinct integers and an 
integer representing a target sum. If any two numbers in the input array sum 
up to the target sum, the function should return them in an array, in any order. 
If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the
target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11] // the numbers could be in reverse order
*/

// O(n) time | O(n) space
export function twoNumberSum(array: number[], targetSum: number): number[] {
  let complements: Record<number, number> = {}
  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    const complement = targetSum - num
    if (complements[complement]) {
      return [num, complement]
    } else {
      complements[num] = 1
    }
  }
  return []
}
