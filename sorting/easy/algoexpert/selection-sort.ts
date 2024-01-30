/*
https://www.algoexpert.io/questions/selection-sort

Write a function that takes in an array of integers and returns a sorted version
of that array. Use the Selection Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

export function selectionSort(array: number[]) {
  let startIdx = 0
  while (startIdx < array.length - 1) {
    let smallest = startIdx
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallest]) smallest = i
    }
    swap(smallest, startIdx, array)
    startIdx++
  }
  return array
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
