/*
https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 
Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

function maxArea(height: number[]): number {
  let leftIdx = 0
  let rightIdx = height.length - 1
  let maxArea = 0
  while (leftIdx < rightIdx) {
    const line1 = height[leftIdx]
    const line2 = height[rightIdx]
    const area = Math.min(line1, line2) * (rightIdx - leftIdx)
    maxArea = Math.max(maxArea, area)
    if (line1 < line2) {
      leftIdx++
    } else {
      rightIdx--
    }
  }
  return maxArea
}
