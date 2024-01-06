/*
https://leetcode.com/problems/permutation-in-string/

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

function checkInclusion(s1: string, s2: string): boolean {
  const s1CharTracker: Record<string, number> = {}
  const s2CharTracker: Record<string, number> = {}

  for (let i = 0; i < s1.length; i++) {
    const s1Char = s1[i]
    const s2Char = s2[i]
    s1CharTracker[s1Char] = (s1CharTracker[s1Char] || 0) + 1
    s2CharTracker[s2Char] = (s2CharTracker[s2Char] || 0) + 1
  }

  let matches = 0
  for (const [char, count] of Object.entries(s1CharTracker)) {
    if (s2CharTracker[char] === count) {
      matches += count
    }
  }

  let left = 0,
    right = s1.length
  while (right < s2.length) {
    if (matches === s1.length) {
      return true
    }
    const charToAdd = s2[right]
    const charToRemove = s2[left]

    s2CharTracker[charToAdd] = (s2CharTracker[charToAdd] || 0) + 1
    s2CharTracker[charToRemove] = (s2CharTracker[charToRemove] || 0) - 1

    if (s2CharTracker[charToAdd] === s1CharTracker[charToAdd]) {
      matches++
    } else if (s2CharTracker[charToAdd] === s1CharTracker[charToAdd] + 1) {
      matches--
    }

    if (s2CharTracker[charToRemove] === s1CharTracker[charToRemove]) {
      matches++
    } else if (
      s2CharTracker[charToRemove] + 1 ===
      s1CharTracker[charToRemove]
    ) {
      matches--
    }
    left++
    right++
  }
  return matches === s1.length
}
