/*
https://www.algoexpert.io/questions/merge-overlapping-intervals

Write a function that takes in a non-empty array of arbitrary intervals, merges 
any overlapping intervals, and returns the new intervals in no particular order.

Each interval `interval` is an array of two integers, with `interval[0]` as the
start of the interval and `interval[1]` as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping. For example,
`[1, 5]` and `[6, 7]` aren't overlapping; however, `[1, 6]` and `[6, 7]` are indeed
overlapping.

Also note that the start of any particular interval will always be less than or
equal to the end of that interval.

Sample Input
intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

Sample Output
[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4, 7], and [6, 8].
// The intervals could be ordered differently.
*/

export function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0])

  const newIntervals: number[][] = []
  let currInterval = array[0]
  for (const interval of array) {
    const [_, currIntervalEnd] = currInterval
    const [intervalStart, intervalEnd] = interval
    if (currIntervalEnd >= intervalStart) {
      currInterval[1] = Math.max(currIntervalEnd, intervalEnd)
    } else {
      newIntervals.push(currInterval)
      currInterval = interval
    }
  }
  newIntervals.push(currInterval)
  return newIntervals
}
