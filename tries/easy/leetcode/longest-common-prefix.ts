/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]

  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i]
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === '') {
        return ''
      }
    }
  }
  return prefix
}

function longestCommonPrefixWithTrie(strs: string[]): string {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]

  const trie = new Trie()
  for (const str of strs) {
    trie.insert(str)
  }
  return trie.longestPrefix
}

class TrieNode {
  children: Record<string, TrieNode>
  count: number

  constructor() {
    this.children = {}
    this.count = 0
  }
}

class Trie {
  root: TrieNode
  totalWords: number
  longestPrefix: string

  constructor() {
    this.root = new TrieNode()
    this.totalWords = 0
    this.longestPrefix = ''
  }

  insert(word: string) {
    this.longestPrefix = ''
    this.totalWords++
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      if (!(letter in node.children)) {
        node.children[letter] = new TrieNode()
      }
      node = node.children[letter]
      node.count++
      if (node.count === this.totalWords) {
        this.longestPrefix = word.substring(0, i + 1)
      }
    }
  }
}
