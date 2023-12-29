/*
https://www.algoexpert.io/questions/sunset-views

Given an array of buildings and a direction that all the buildings face, return an array
of the indices of the buildings that can see the sunset

A building can see the sunset if it's strictly taller than all the buildings that come after it in
the direction that it faces.

The input array named buildings contains positive, non-zero integers representing the heights of the buildings.
A building at index i thus has a height denoted by buildings[i]. All the buildings face the same direction, and this
direction is either east or west, denoted by the input string named direction, which will always be equal to either
'EAST' or 'WEST'. In relation to the input array, you can interpret these directions as right for east and left for west.

Important note: the indices in the output array should be sorted in ascending order.

Sample Input #1
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = 'EAST'

Sample Output #1
[1, 3, 6, 7]

Sample Input #2
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = 'WEST'

Sample Output #2
[0, 1]
*/

export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

export function sunsetViews(buildings: number[], direction: Direction) {
  let result: number[] = []
  const step = direction === Direction.East ? 1 : -1
  let idx = direction === Direction.East ? 0 : buildings.length - 1
  while (0 <= idx && idx <= buildings.length - 1) {
    const building = buildings[idx]
    if (!result.length) {
      result.push(idx)
    } else {
      while (buildings[result[result.length - 1]] <= building) {
        result.pop()
      }
      result.push(idx)
    }
    idx += step
  }
  if (direction === Direction.West) {
    result = result.reverse()
  }
  return result
}
