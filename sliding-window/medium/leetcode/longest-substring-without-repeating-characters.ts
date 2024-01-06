/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let right = 0
  let max = 0
  const charSet = new Set<string>()
  while (right < s.length) {
    const char = s[right]
    while (charSet.has(char)) {
      charSet.delete(s[left])
      left++
    }
    charSet.add(char)
    max = Math.max(max, right - left + 1)
    right++
  }
  return max
}
