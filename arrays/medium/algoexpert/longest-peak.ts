/*
https://www.algoexpert.io/questions/longest-peak

Write a function that takes in an array of integers and returns the length of 
the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing 
until they reach a tip (the highest value in the peak), at which point they
become strictly decreasing. At least three integers are required to form a peak.

For example, the integers `1, 4, 10, 2` form a peak, but the integers 
`4, 0, 10` don't and neither do the integers `1, 2, 2, 0`. Similarly, the
integers `1, 2, 3` don't form a peak because there aren't any strictly 
decreasing integers after the `3`.

Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output
6 // 0, 10, 6, 5, -1, -3
*/

export function longestPeak(array: number[]) {
  let longest = 0
  let i = 1
  while (i < array.length) {
    let count = 1

    if (array[i - 1] >= array[i]) {
      i++
      continue
    }

    while (i < array.length && array[i - 1] < array[i]) {
      i++
      count++
    }

    if (i >= array.length || array[i - 1] === array[i]) {
      continue
    }

    while (i < array.length && array[i - 1] > array[i]) {
      i++
      count++
    }

    longest = Math.max(longest, count)
  }
  return longest
}
