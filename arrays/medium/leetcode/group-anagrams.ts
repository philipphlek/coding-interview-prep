/*
https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// O(nlogn * m)
function groupAnagrams(strs: string[]): string[][] {
  const anagramTracker: Record<string, string[]> = {}
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const sortedLetters = str.split('').sort().join('')
    if (sortedLetters in anagramTracker) {
      anagramTracker[sortedLetters].push(str)
    } else {
      anagramTracker[sortedLetters] = [str]
    }
  }
  return Object.values(anagramTracker)
}

// O(n * m)
function groupAnagramsNoSort(strs: string[]): string[][] {
  const anagramTracker: Record<string, string[]> = {}
  for (const str of strs) {
    const arr: number[] = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      const idx = str.charCodeAt(i) - 'a'.charCodeAt(0)
      arr[idx]++
    }
    const anagram = JSON.stringify(arr)
    if (!anagramTracker[anagram]) {
      anagramTracker[anagram] = [str]
    } else {
      anagramTracker[anagram].push(str)
    }
  }
  return Object.values(anagramTracker)
}
