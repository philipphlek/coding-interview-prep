/*
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

function longestPalindrome(s: string): string {
  let longest = ''
  let count = 0

  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currCount = right - left + 1
      if (currCount > count) {
        count = currCount
        longest = s.substring(left, right + 1)
      }
      left--
      right++
    }

    ;(left = i), (right = i + 1)
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currCount = right - left + 1
      if (currCount > count) {
        count = currCount
        longest = s.substring(left, right + 1)
      }
      left--
      right++
    }
  }

  return longest
}
