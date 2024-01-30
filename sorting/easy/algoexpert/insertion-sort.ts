/*
https://www.algoexpert.io/questions/insertion-sort

Write a function that takes in an array of integers and returns a sorted version
of that array. Use the Insertion Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j--
    }
  }
  return array
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
