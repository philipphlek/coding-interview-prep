/*
https://www.algoexpert.io/questions/longest-most-frequent-prefix

Write a function that takes in an array of unique strings and 
returns the prefix that appears most frequently throughout the strings. 
If there are two or more such prefixes, your function should return the longest one. 
If there are no such prefixes, your function should return the longest string. 
You can assume that there will only ever be one longest prefix or string.
For example, given the strings ["algoexpert", "algorfthm", "foo", "food"],
the most frequent prefix is either "algo" or "foo", since both appear in two strings. 
However, "algo" is longer than "foo", so "algo" is the desired answer.

Sample Input #1
strings - [
  "algoexpert",
  algorithm",
  "frontendexpert",
  "mlexpert"
]
Sample Output #1
"algo"

Sample Input #2
strings - [
  "hello",
  "world", 
  "fossil",
  "worldly",
  "food",
  "forrest”，
  "heliun",
  "algoexpert",
  "algorithm"
]
Sample Output #2
"foot"
*/

export function longestMostFrequentPrefix(strings: string[]): string {
  const trie = new Trie()
  for (const string of strings) {
    trie.insert(string)
  }
  return trie.maxPrefixString.substring(0, trie.maxPrefixIndex + 1)
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
  maxPrefixCount: number
  maxPrefixString: string
  maxPrefixIndex: number

  constructor() {
    this.root = new TrieNode()
    this.maxPrefixCount = 0
    this.maxPrefixString = ''
    this.maxPrefixIndex = -1
  }

  insert(word: string) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      if (!(letter in node.children)) {
        node.children[letter] = new TrieNode()
      }
      node = node.children[letter]
      node.count++
      if (node.count > this.maxPrefixCount) {
        this.maxPrefixCount = node.count
        this.maxPrefixString = word
        this.maxPrefixIndex = i
      } else if (
        node.count === this.maxPrefixCount &&
        i > this.maxPrefixIndex
      ) {
        this.maxPrefixString = word
        this.maxPrefixIndex = i
      }
    }
  }
}
