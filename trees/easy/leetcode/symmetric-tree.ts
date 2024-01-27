/*
https://leetcode.com/problems/symmetric-tree/

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:
The number of nodes in the tree is in the range [1, 1000].
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

function isSymmetric(root: TreeNode | null): boolean {
  const stack: (TreeNode | null)[][] = [[root.left, root.right]]
  while (stack.length) {
    const [leftNode, rightNode] = stack.pop()!
    if (leftNode?.val !== rightNode?.val) return false

    if (leftNode?.left || rightNode?.right)
      stack.push([leftNode.left, rightNode.right])
    if (leftNode?.right || rightNode?.left)
      stack.push([leftNode?.right, rightNode?.left])
  }
  return true
}

function isSymmetricRecursive(root: TreeNode | null): boolean {
  if (!root) return true
  return isMirror(root.left, root.right)
}

function isMirror(
  leftNode: TreeNode | null,
  rightNode: TreeNode | null
): boolean {
  if (!leftNode && !rightNode) return true
  if (!leftNode || !rightNode) return false

  return (
    leftNode.val === rightNode.val &&
    isMirror(leftNode.left, rightNode.right) &&
    isMirror(leftNode.right, rightNode.left)
  )
}
