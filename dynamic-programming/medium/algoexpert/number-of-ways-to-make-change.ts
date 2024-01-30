/*
https://www.algoexpert.io/questions/number-of-ways-to-make-change

Given an array of distinct positive integers representing coin denominations and 
a single non-negative integer `n` representing a target amount of money, write a 
function that returns the number of ways to make change for that target amount 
using the given coin denominations.

Note that an unlimited amount of coins is at your disposal.

Sample Input
n = 6
denoms = [1, 5]

Sample Output
2 // 1x1 + 1x5 and 6x1
*/

export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  const numWays: number[] = Array(n + 1).fill(0)
  numWays[0] = 1 // there's 1 way to make $0
  for (const denom of denoms) {
    for (let i = 0; i < numWays.length; i++) {
      if (denom <= i) {
        numWays[i] += numWays[i - denom] // change is only possible if it eventually hits $0 base case
      }
    }
  }
  return numWays[n]
}
