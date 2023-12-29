/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValid(s: string): boolean {
  const OPENING_BRACKETS = ['(', '[', '{']
  const CLOSING_BRACKETS = [')', ']', '}']
  const MATCHING_BRACKETS: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack: string[] = []
  for (const char of s) {
    if (OPENING_BRACKETS.includes(char)) {
      stack.push(char)
    } else if (CLOSING_BRACKETS.includes(char)) {
      if (!stack.length) {
        return false
      }
      const prevBracket = stack[stack.length - 1]
      if (MATCHING_BRACKETS[prevBracket] === char) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
