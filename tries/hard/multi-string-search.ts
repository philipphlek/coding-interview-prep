/*
https://www.algoexpert.io/questions/longest-most-frequent-prefix

Write a function that takes in a big string and an array of small strings, 
all of which are smaller in length than the big string The function should 
return an array of booleans, where each boolean represents whether the small 
string at that index in the array of small strings is contained in the big string.

Note that you can't use language-built-in string-matching methods.

Sample Input #1
bigString - "this is a big string" 
smallStrings - ["this", "yo", "is", "a", "bigger", "string", "kappa"]
Sample Output #1
[true, false, true, true, false, true, false]

Sample Input #2
bigString - "abcdefghijklmnoparstuvwxyz"
smallStrings - ["abc", "nnopar", "wyz", no", "e", "tuuv"]
Sample Output #2
[true, true, false, true, true, false]
*/

export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const trie = new Trie()
  for (let i = 0; i < bigString.length; i++) {
    const smallerString = bigString.substring(i)
    trie.insert(smallerString)
  }
  return smallStrings.map((string) => trie.search(string))
}

class TrieNode {
  children: Record<string, TrieNode>
  isEndWord: boolean

  constructor() {
    this.children = {}
    this.isEndWord = false
  }
}

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string) {
    let node = this.root
    for (const letter of word) {
      if (!(letter in node.children)) {
        node.children[letter] = new TrieNode()
      }
      node = node.children[letter]
    }
  }

  search(word: string): boolean {
    let node = this.root
    for (const letter of word) {
      if (!(letter in node.children)) {
        return false
      }
      node = node.children[letter]
    }
    return true
  }
}
