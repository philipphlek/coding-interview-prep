/*
https://www.algoexpert.io/questions/middle-node  

You're given a Linked List with at least one node. Write a function that returns the middle node of the linked list. 
If there are two middle nodes (i.e. an even number of nodes), your function should return the second of 
these nodes.

Each `LinkedList` node has an integer `value` as well as a `next` node pointing to the next node in the list or to `None` / `null` if it's the tail of the list.

Sample Input
linkedList = 2 -> 7 -> 3 -> 5

Sample Output
3 -> 5 // The middle node could be 7 or 3, we return the second middle node
*/

export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

export function middleNode(linkedList: LinkedList) {
  let size = 1
  let currNode: LinkedList | null = linkedList
  while (currNode.next) {
    currNode = currNode.next
    size++
  }

  const middleIdx = Math.floor(size / 2)
  let currIdx = 0
  currNode = linkedList
  while (currNode && currIdx++ < middleIdx) {
    currNode = currNode.next
  }
  return currNode
}
