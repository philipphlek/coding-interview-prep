/*
https://www.algoexpert.io/questions/merging-linked-lists

You're given two Linked List of potentially unequal length. These Linked Lists potentially
merge at a shared intersection node. Write a function that returns the intersection
node or return `None` / `null` if there is no intersection.

Each `Linked List` node has an integer `value` as well as a `next` node pointing to the
next node in the list or to `None` / `null` if it's the tail of the list.

Note: Your function should return an existing node. It should not modify either
Linked List, and it should not create any new Linked Lists.

Sample Input
linkedListOne = 2 -> 3 -> 1 -> 4
linkedListTwo = 8 -> 7 -> 1 -> 4

Sample Output
1 -> 4 // The lists intersect at the node with value 1
*/

export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

export function mergingLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  let node1: LinkedList | null = linkedListOne
  let size1 = 0
  while (node1) {
    size1++
    node1 = node1.next
  }

  let node2: LinkedList | null = linkedListTwo
  let size2 = 0
  while (node2) {
    size2++
    node2 = node2.next
  }

  const sizeDiff = Math.abs(size1 - size2)

  let bigNode: LinkedList | null = size1 > size2 ? linkedListOne : linkedListTwo
  let smallNode: LinkedList | null =
    size1 > size2 ? linkedListTwo : linkedListOne
  for (let i = 0; i < sizeDiff; i++) {
    bigNode = bigNode!.next
  }

  while (bigNode !== smallNode) {
    bigNode = bigNode!.next
    smallNode = smallNode!.next
  }

  return bigNode
}
