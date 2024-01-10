class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  let closest = tree.value
  let node: BST | null = tree
  while (node) {
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value
    }
    if (node.value < target) {
      node = node.right
    } else if (node.value > target) {
      node = node.left
    } else {
      break
    }
  }
  return closest
}

export function findClosestValueInBstRecursive(tree: BST, target: number) {
  return helper(tree, target, tree.value)
}

function helper(tree: BST | null, target: number, closest: number): number {
  if (!tree) {
    return closest
  }
  let updatedClosest = closest
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    updatedClosest = tree.value
  }
  if (tree.value < target) {
    return helper(tree.right, target, updatedClosest)
  } else if (tree.value > target) {
    return helper(tree.left, target, updatedClosest)
  } else {
    return updatedClosest
  }
}
