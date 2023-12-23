/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

function isAnagram(s: string, t: string): boolean {
  const letterTracker: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (letterTracker[letter] === undefined) {
      letterTracker[letter] = 1
    } else {
      letterTracker[letter]++
    }
  }
  for (let i = 0; i < t.length; i++) {
    const letter = t[i]
    if (!letterTracker[letter]) {
      return false
    } else {
      letterTracker[letter]--
    }
  }
  return Object.values(letterTracker).every((num) => num === 0)
}
