/*
https://www.algoexpert.io/questions/node-depths

The distance between a node in a Binary Tree and the tree's root is called the
node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes'
depths.

Each BinaryTree node has an integer value, a left child node, and a right
child node. Children nodes can either be BinaryTree nodes themselves or
None / null.

Sample Input
tree =     1
        /     \
      2       3
    /   \    /   \
  4     5  6     7
/   \  /
8    9 10

Sample Output
16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.
*/

export function nodeDepths(root: BinaryTree) {
  let totalDepth = 0
  const stack: {node: BinaryTree | null; depth: number}[] = [
    {node: root, depth: 0},
  ]
  while (stack.length > 0) {
    const {node, depth} = stack.pop()!
    if (!node) {
      continue
    }
    totalDepth += depth
    stack.push({node: node.left, depth: depth + 1})
    stack.push({node: node.right, depth: depth + 1})
  }
  return totalDepth
}

export function nodeDepthsRecursive(root: BinaryTree): number {
  return helper(root, 0)
}

function helper(node: BinaryTree | null, depth: number): number {
  if (!node) {
    return 0
  }
  return depth + helper(node.left, depth + 1) + helper(node.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}
