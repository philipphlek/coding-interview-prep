/*
https://leetcode.com/problems/design-hashset/

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 
Example 1:
Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 
Constraints:
0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.
*/

class HashNode {
  val: number
  next: HashNode | null

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class MyHashSet {
  head: HashNode | null

  constructor() {
    this.head = null
  }

  add(key: number): void {
    const hashNode = new HashNode(key)
    if (!this.head) {
      this.head = hashNode
      return
    }
    if (!this.contains(key)) {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = hashNode
    }
  }

  remove(key: number): void {
    if (!this.head) {
      return
    }
    if (this.head.val === key) {
      this.head = this.head.next
      return
    }
    let curr: HashNode | null = this.head
    while (curr.next) {
      if (curr.next.val === key) {
        curr.next = curr.next.next
        break
      }
      curr = curr.next
    }
  }

  contains(key: number): boolean {
    let curr = this.head
    while (curr) {
      if (curr.val === key) {
        return true
      }
      curr = curr.next
    }
    return false
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
