/*
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 
Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
*/

// class ListNode {
//   val: number
//   next: ListNode | null

//   constructor(val: number) {
//     this.val = val
//     this.next = null
//   }
// }

function isPalindrome(head: ListNode | null): boolean {
  let values: number[] = []
  while (head) {
    values.push(head.val)
    head = head.next
  }

  let left = 0
  let right = values.length - 1
  while (left < right) {
    if (values[left] !== values[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
