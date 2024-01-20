/*
https://www.algoexpert.io/questions/array-of-products

Write a function that takes in a non-empty array of integers and returns an array
of the same length, where each element in the output array is equal to the product
of every other number in the input array.

In other words, the value at `output[i]` is equal to the product of every number
in the input array other than `input[i]`.

Note that you're expected to solve this problem without using division.

Sample Input
array = [5, 1, 4, 2]

Sample Output
[8, 40, 10, 20]
//  8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4
*/

export function arrayOfProducts(array: number[]) {
  let leftProducts: number[] = Array(array.length).fill(1)
  for (let i = 1; i < array.length; i++) {
    const num = array[i - 1]
    leftProducts[i] = num * leftProducts[i - 1]
  }
  let rightProducts: number[] = Array(array.length).fill(1)
  for (let i = array.length - 2; i >= 0; i--) {
    const num = array[i + 1]
    rightProducts[i] = num * rightProducts[i + 1]
  }
  return leftProducts.map((num, i) => num * rightProducts[i])
}
