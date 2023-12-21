/*
https://www.algoexpert.io/questions/remove-duplicates-from-linked-list  

You're given the head of a Singly Linked List whose nodes are in sorted order
with respect to their values. Write a function that returns a modified version
of the Linked List that doesn't contain any nodes with duplicate values. The
Linked List should be modified in place (i.e., you shouldn't create a brand new
list), and the modified Linked List should still have its nodes sorted with
respect to their values.

Each `LinkedList` node has an integer `value` as well as a `next` node pointing
to the next node in the list or to `None` / `null` if it's the tail of the list.

Sample Input
linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1

Sample Output
1 -> 3 -> 4 -> 5 -> 6 // the head node with value 1
*/

export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currNode: LinkedList = linkedList
  while (currNode.next) {
    if (currNode.next.value === currNode.value) {
      currNode.next = currNode.next.next
      continue
    }
    currNode = currNode.next
  }
  return linkedList
}
