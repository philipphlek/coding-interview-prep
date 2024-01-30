/*
https://www.algoexpert.io/questions/min-number-of-coins-for-change

Given an array of positive integers representing coin denominations and a single 
non-negative integer `n` representing a target amount of money, write a function 
that returns the smallest number of coins needed to make change for (to sum up to) 
that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the
denominations are `[1, 5, 10]`, you have access to an unlimited amount of `1`s, 
`5`s, and `10`s.

If it's impossible to make change for the target amount, return `-1`.

Sample Input
n = 7
denoms = [1, 5, 10]

Sample Output
3 // 2x1 + 1x5
*/

export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numCoins: number[] = Array(n + 1).fill(Infinity) // each index will represent $ value up to n
  numCoins[0] = 0 // base case of $0 will always require 0 coins
  for (const denom of denoms) {
    for (let i = 0; i < numCoins.length; i++) {
      const currNumCoins = numCoins[i]
      if (denom <= i) {
        // if denom is less than or equal to $ value, then we can use the denom which counts as 1 coin
        numCoins[i] = Math.min(currNumCoins, numCoins[i - denom] + 1) // new value will be min between curr num coins and 1 coin for denom + the remainder
      }
    }
  }
  return numCoins[n] === Infinity ? -1 : numCoins[n]
}
