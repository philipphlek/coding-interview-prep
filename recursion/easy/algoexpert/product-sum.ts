/*
https://www.algoexpert.io/questions/product-sum

Write a function that takes in a "special" array and returns its product sum. 

A "special" array is a non-empty array that contains either integers or other "special" arrays. 
The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.

The depth of a "special" array is how far nested it is. For instance, the depth of `[]` is `1`; 
the depth of the inner array in `[[]]` is `2`; the depth of the innermost array in `[[[]]]` is `3`.

Therefore, the product sum of `[x, y]` is `x + y`; the product sum of `[x, [y, z]]` is `x + 2 * (y + z)`; the product sum of `[x, [y, [z]]]` is `x + 2 * (y + 3z)`.

Sample Input
array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

Sample Output
12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
*/

type SpecialArray = Array<number | SpecialArray>

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth: number = 1) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    const val = array[i]
    if (Array.isArray(val)) {
      total += (depth + 1) * productSum(val, depth + 1)
    } else {
      total += val
    }
  }
  return total
}
