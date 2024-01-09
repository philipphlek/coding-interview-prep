/*
https://www.algoexpert.io/questions/breadth-first-search

You're given a `Node` class that has a `name` and an array of optional `children` 
nodes. When put together, nodes form an acyclic tree-like structure.

Implement the `breadthFirstSearch` method on the `Node` class, which takes in an
empty array, traverses the tree using the Breadth-first Search approach (specifically
navigating the tree from left to right), stores all of the nodes' names in the input
array, and returns it.

Sample Input
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K
```

Sample Output
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
*/

export class Node {
  name: string
  children: Node[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string): Node {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this]
    while (queue.length) {
      const node = queue.shift()!
      array.push(node.name)
      for (const child of node.children) {
        queue.push(child)
      }
    }
    return array
  }
}
