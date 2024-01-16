/*
https://www.algoexpert.io/questions/single-cycle-check

You're given an array of integers where each integer represents a jump of its 
value in the array. For instance, the integer `2` represents a jump of two indices 
forward in the array; the integer `-3` represents a jump of `three indices backward 
in the array.

If a jump spills past the array's bounds, it wraps over to the other side. For
instance, a jump of `-1` at index `0` brings us to the last index in the array.
Similarly, a jump of `1` at the last index in the array brings us to index `0`.

Write a function that returns a boolean representing whether the jumps in the
array form a single cycle. A single cycle occurs if, starting at any index in
the array and following the jumps, every element is visited exactly once before
landing back on the starting index.

Sample Input
array = [2, 3, 1, -4, -4, 2]

Sample Output
true
2  -> 1 -> -4 -> 2 -> 3 -> -4 -> 2
3  -> -4 -> 2 -> 1 -> -4 -> 2 -> 3
-4 -> 2 -> 3 -> -4 -> 2 -> 1 -> -4
-4 -> 2 -> 1 -> -4 -> 2 -> 3 -> -4
2  -> 3 -> -4 -> 2 -> 1 -> -4 -> 2
*/

export function hasSingleCycle(array: number[]) {
  let visited = 0
  let idx = 0
  while (visited < array.length) {
    if (idx === 0 && visited > 0) {
      return false
    }
    idx = jumpIdx(idx, array)
    visited++
  }
  return idx === 0
}

function jumpIdx(index: number, array: number[]): number {
  const nextIdx = (array[index] + index) % array.length
  return nextIdx < 0 ? array.length + nextIdx : nextIdx
}
