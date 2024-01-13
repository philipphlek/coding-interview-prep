/*
Write a SuffixTrie cass for a Suffix-Trie-like data structure. 
The class should have a root property set to be the root nade of the trie and should support:
  • Creating the trie from a string, this will be done by calling the populateSuffixTrieFrom
    method upon class instantiation, which should populate the root of the class.
  • Searching for strings in the trie.

Note that every string added to the trie should end with the special endSymbol character" "*"

Sample Input (for creation)
string - "babc"

Sample Input (for searching in the suffix trie above)
string - abc
Sample Output (for searching in the suffix trie above)
true
*/

interface TrieNode {
  [key: string]: TrieNode | boolean
}

export class SuffixTrie {
  root: TrieNode
  endSymbol: string

  constructor(string: string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i++) {
      // for every suffix, we need to increment the left pointer
      let node = this.root
      for (let j = i; j < string.length; j++) {
        // go through every letter in suffix
        const letter = string[j]
        if (!node[letter]) {
          node[letter] = {}
        }
        node = node[letter] as TrieNode
      }
      node[this.endSymbol] = true
    }
  }

  contains(string: string) {
    let node = this.root
    for (const letter of string) {
      if (!node[letter]) {
        return false
      }
      node = node[letter] as TrieNode
    }
    return node[this.endSymbol] === true
  }
}
