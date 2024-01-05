/*
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    const leftChar = s[left].toLowerCase()
    const rightChar = s[right].toLowerCase()
    if (
      !(
        ('0' <= leftChar && leftChar <= '9') ||
        ('a' <= leftChar && leftChar <= 'z')
      )
    ) {
      left++
      continue
    }
    if (
      !(
        ('0' <= rightChar && rightChar <= '9') ||
        ('a' <= rightChar && rightChar <= 'z')
      )
    ) {
      right--
      continue
    }
    if (leftChar !== rightChar) {
      return false
    }
    left++
    right--
  }
  return true
}
