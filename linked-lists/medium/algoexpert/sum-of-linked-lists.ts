/*
https://www.algoexpert.io/questions/sum-of-linked-lists

You're given two Linked Lists of potentially unequal length. Each Linked List
represents a non-negative integer, where each node in the Linked List is a
digit of that integer, and the first node in each Linked List always
represents the least significant digit of the integer. Write a function that
returns the head of a new Linked List that represents the sum of the integers
represented by the two input Linked Lists.

Each `LinkedList` node has an integer `value` as well as a `next` node
pointing to the next node in the list or to `None` / `null` if it's the tail
of the list. The value of each `LinkedList` node is always in the range of
`0 - 9`.

Note: your function must create and return a new Linked List, and you're not
allowed to modify either of the input Linked Lists.

Sample Input
linkedListOne = 2 -> 4 -> 7 -> 1 // 1742
linkedListTwo = 9 -> 4 -> 5 // 549

Sample Output
1 -> 9 -> 2 -> 2 // 2291
*/

export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  const newLinkedList = new LinkedList(0)
  let currNode = newLinkedList
  let sumCarry = 0

  let node1: LinkedList | null = linkedListOne
  let node2: LinkedList | null = linkedListTwo
  while (node1 != null || node2 != null || sumCarry != 0) {
    const num1 = node1 === null ? 0 : node1.value
    const num2 = node2 === null ? 0 : node2.value
    const sum = num1 + num2 + sumCarry

    const newDigit = sum % 10
    const newNode = new LinkedList(newDigit)
    currNode.next = newNode
    currNode = newNode

    sumCarry = Math.floor(sum / 10)
    node1 = node1 === null ? null : node1.next
    node2 = node2 === null ? null : node2.next
  }
  return newLinkedList.next
}
