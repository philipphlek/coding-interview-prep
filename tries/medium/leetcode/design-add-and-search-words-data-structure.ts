/*
https://leetcode.com/problems/design-add-and-search-words-data-structure/

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 
Example:
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]
Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 
Constraints:
1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 104 calls will be made to addWord and search.
*/

class TrieNode {
  children: Record<string, TrieNode>
  isEndWord: boolean

  constructor() {
    this.children = {}
    this.isEndWord = false
  }
}

class WordDictionary {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  addWord(word: string): void {
    let node = this.root
    for (const char of word) {
      if (!(char in node.children)) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndWord = true
  }

  search(word: string): boolean {
    function dfs(startIdx: number, node: TrieNode) {
      for (let i = startIdx; i < word.length; i++) {
        const char = word[i]
        if (char === '.') {
          for (const child of Object.values(node.children)) {
            if (dfs(i + 1, child)) {
              return true
            }
          }
          return false
        } else {
          if (!(char in node.children)) {
            return false
          }
          node = node.children[char]
        }
      }
      return node.isEndWord
    }
    return dfs(0, this.root)
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
