/*
https://leetcode.com/problems/subtree-of-another-tree/

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false

Constraints:
The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const stack: (TreeNode | null)[] = [root]
  while (stack.length) {
    const node = stack.pop()!
    if (!node) {
      continue
    }
    if (node.val === subRoot.val) {
      if (isSameTree(node, subRoot)) {
        return true
      }
    }
    stack.push(node.left)
    stack.push(node.right)
  }
  return false
}

function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (!tree1 && !tree2) {
    return true
  }
  if (!tree1 || !tree2 || tree1.val !== tree2.val) {
    return false
  }
  return (
    isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  )
}
