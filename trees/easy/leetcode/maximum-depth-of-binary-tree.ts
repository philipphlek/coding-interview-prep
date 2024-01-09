/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let max = 0
  const stack: {node: TreeNode | null; depth: number}[] = [
    {node: root, depth: 1},
  ]
  while (stack.length) {
    const {node, depth} = stack.pop()!
    if (!node) {
      continue
    }
    max = Math.max(max, depth)
    stack.push({node: node.left, depth: depth + 1})
    stack.push({node: node.right, depth: depth + 1})
  }
  return max
}

function maxDepthRecursion(root: TreeNode | null): number {
  return helper(root, 1, 0)
}

function helper(node: TreeNode | null, depth: number, max: number) {
  if (!node) {
    return max
  }
  const newMax = Math.max(max, depth)
  return Math.max(
    helper(node.left, depth + 1, newMax),
    helper(node.right, depth + 1, newMax)
  )
}
