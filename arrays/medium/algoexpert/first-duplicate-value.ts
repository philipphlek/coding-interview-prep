/*
https://www.algoexpert.io/questions/first-duplicate-value

Given an array of integers between `1` and `n`, inclusive, where `n` is the length of 
the array, write a function that returns the first integer that appears more 
than once (when the array is read from left to right).

In other words, out of all the integers that might occur more than once in the
input array, your function should return the one whose first duplicate value
has the minimum index.

If no integer appears more than once, your function should return `-1`.

Note that you're allowed to mutate the input array.

Sample Input #1
array = [2, 1, 5, 2, 3, 3, 4]

Sample Output #1
2 // 2 is the first integer that appears more than once.
// 3 also appears more than once, but the second 3 appears after the second 2.

Sample Input #2
array = [2, 1, 5, 3, 3, 2, 4]

Sample Output #2
3 // 3 is the first integer that appears more than once.
// 2 also appears more than once, but the second 2 appears after the second 3.
*/

export function firstDuplicateValue(array: number[]): number {
  // vals -> 1...n
  // idx -> 0...n-1
  for (const num of array) {
    // handling negative values
    const absVal = Math.abs(num)

    // index used to travel to another value
    const idx = absVal - 1

    // if visited value is negative, that means we've visited the same place twice so thats the dupe value
    if (array[idx] < 0) return absVal

    // visited values with be marked as negative
    array[idx] *= -1
  }
  return -1
}
