/*
https://www.algoexpert.io/questions/reverse-linked-list

Write a function that takes in the head of a Singly Linked List, reverses the list in place
(i.e., doesn't create a brand new list), and returns its new head.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the
list or to None/null if it's the tail of the list.

You can assume that the input Linked List will always have at least one node; in other words,
the head will never be None/null.

Sample Input:
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 // the head node with value 0

Sample Output:
5 -> 4 -> 3 -> 2 -> 1 -> 0 // the new head node with value 5
*/

export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

export function reverseLinkedList(head: LinkedList) {
  let prev: LinkedList | null = null
  let curr: LinkedList | null = head
  while (curr) {
    const next: LinkedList | null = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
